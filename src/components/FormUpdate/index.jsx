import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import connections from '../../connections';

const FormUpdate = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Handler para seleccionar archivo
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "text/csv") {
            setSelectedFile(file);
            toast.success("Archivo cargado correctamente", { autoClose: 2000 });
        } else {
            toast.error("Solo se permiten archivos CSV", { autoClose: 2000 });
        }
    };

    // Handler para eliminar el archivo seleccionado
    const handleRemoveFile = () => {
        setSelectedFile(null);
        document.getElementById('csvFile').value = '';
        toast.info("Archivo eliminado", { autoClose: 2000 });
    };

    // Handler para subir el archivo a la API
    const handleUpload = async () => {
        if (!selectedFile) {
            toast.warning("Por favor, seleccione un archivo antes de continuar", { autoClose: 2000 });
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {

            const genToken = await connections.genTokenZoho();
            const tokenZoho = await genToken.data.data.auth_token;

            const response = await connections.uploadData(tokenZoho, formData);

            if (response.data.success) {
                toast.success("Base de datos actualizada correctamente", { autoClose: 2000 });
                document.getElementById('csvFile').value = '';
                setSelectedFile(null);
            } else {
                throw new Error("Error en la actualización");
            };
        } catch (error) {
            console.error(error);
            toast.error("Error al actualizar la base de datos", { autoClose: 2000 });
        }
    };

    // Handler para descargar el modelo de CSV
    const handleDownloadTemplate = () => {
        const link = document.createElement('a');
        link.href = '/assets/FORMATO_PARA_CREAR_CSV.xlsx';
        link.download = 'FORMATO_PARA_CREAR_CSV.xlsx';
        link.click();
        toast.info("Plantilla descargada", { autoClose: 2000 });
    };

    return (
        <div className="container p-4 container-update">
            <h2 className="mb-4">Actualizar Base de Datos</h2>
            <div className="mb-3">
                <label htmlFor="csvFile" className="form-label">Seleccione un archivo CSV</label>
                <input
                    type="file"
                    id="csvFile"
                    className="form-control"
                    accept=".csv"
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <div className="mt-3">
                        <p><strong>Archivo seleccionado:</strong> {selectedFile.name}</p>
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={handleRemoveFile}
                        >
                            Eliminar archivo
                        </button>
                    </div>
                )}
            </div>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
                <button
                    type="button"
                    style={{ width: "50%" }}
                    className="btn btn-primary me-2"
                    onClick={handleUpload}
                    disabled={!selectedFile}
                >
                    Subir y Actualizar
                </button>
            </div>
            <p
                className="text-download"
                onClick={handleDownloadTemplate}
            >
                Descargar archivo de ejemplo (formato CSV) para cargar los datos correctamente
            </p>

            <ToastContainer />
        </div>
    );
};

export default FormUpdate;
