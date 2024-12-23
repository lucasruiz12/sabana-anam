import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import clients from '../../constants/clients';
import connections from '../../connections';
import DatePicker from 'react-datepicker';
import Navbar from '../../components/Navbar';
import FormUpdate from '../../components/FormUpdate';
import ModalCode from '../../components/ModalCode';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Home = () => {
    const [dataToSearch, setDataToSearch] = useState({
        site: "",
        interval: 9,
    });
    const [dateToFilter, setDateToFilter] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [filteredClients, setFilteredClients] = useState(clients);
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const generateCSVToDownload = (data) => {
        const BOM = '\uFEFF';
        const headers = Object.keys(data[0]);
        const rows = data.map(row =>
            headers.map(header =>
                `"${(row[header] || "").toString().replace(/"/g, '""')}"`
            ).join(',').trim()
        );
        const csvContent = [headers.join(','), ...rows].join('\n');

        return BOM + csvContent;
    };

    const downloadCSV = (csvContent, filename) => {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setFilteredClients(
            clients.filter(client =>
                client.name.toLowerCase().includes(value.toLowerCase())
            )
        );
        setShowDropdown(true);
    };

    const handleClientSelect = (clientName) => {
        setDataToSearch((prevData) => ({ ...prevData, site: clientName === "Todos los puntos tácticos" ? "" : clientName }));
        setInputValue(clientName);
        // if(clientName !== "Todos los puntos tácticos"){
        setFilteredClients(
            clients.filter(client =>
                client.name.toLowerCase().includes(clientName.toLowerCase())
            )
        );
        // }
        setShowDropdown(false);
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;

        if (value === "9") {
            handleClientSelect("Todos los puntos tácticos");
        };

        if (value !== "3") {
            setDateToFilter("");
            setDataToSearch({
                site: "",
                interval: parseInt(value),
            });
        };
        setDataToSearch((prevData) => ({
            ...prevData,
            interval: parseInt(value),
        }));
    };

    const handleDownloadClick = () => {
        const { site, interval } = dataToSearch;
        let now = new Date();
        
        if (dateToFilter) {
            now = new Date(dateToFilter);
        }
        const date = interval === 9 ? "" : now.toISOString();
        const daily = interval === 1;
        const weekly = interval === 2;
        const specifies = interval === 3;
        const monthly = interval === 4;
        const clientName = "Covivi";
        const newData = { date, daily, weekly, specifies, monthly, clientName, site };
        let newFileName = `SABANA_${daily ? "DAILY" : weekly ? "WEEKLY" : daily ? "FILTER_BY_DAY" : specifies ? "FILTER_ONE_DAY" : monthly ? "MONTHLY" : "ALL_DATA"}-${date}_${clientName}`;
    
        if (site !== "") {
            newFileName += site.split("-")[0].trim();
        }
        newFileName += ".csv";
    
        // Validación de descarga
        const validation = JSON.parse(localStorage.getItem("validationDownload"));
        const confirmationDate = now.toLocaleDateString();
    
        if (!validation) {
            // Si no existe validación, se crea y se permite la descarga
            localStorage.setItem("validationDownload", JSON.stringify({ date: confirmationDate, count: 1 }));
            proceedWithDownload(newData, newFileName);
        } else {
            if (validation.date === confirmationDate) {
                if (validation.count < 2) {
                    // Si la fecha coincide y no se ha alcanzado el límite
                    validation.count += 1;
                    localStorage.setItem("validationDownload", JSON.stringify(validation));
                    proceedWithDownload(newData, newFileName);
                } else {
                    toast.error("Ya has alcanzado el límite de descargas para hoy. Intenta nuevamente mañana.", { autoClose: 2000 });
                }
            } else {
                // Si es un nuevo día, reinicia el contador y permite la descarga
                localStorage.setItem("validationDownload", JSON.stringify({ date: confirmationDate, count: 1 }));
                proceedWithDownload(newData, newFileName);
            }
        }
    };
    
    // Función para realizar la descarga
    const proceedWithDownload = (newData, newFileName) => {
        connections.genTokenZoho().then(response => {
            toast.info("Descarga en curso, por favor espere...", { autoClose: 2000 });
            if (response.data.success) {
                const tokenZoho = response.data.data.auth_token;
                connections.exportTickets(tokenZoho, newData).then(resp => {
                    if (resp.data.success) {
                        const { data } = resp.data;
                        const arrayToCSV = generateCSVToDownload(data);
                        downloadCSV(arrayToCSV, newFileName);
                        setTimeout(() => {
                            setDataToSearch({ site: "", interval: 9 });
                            setInputValue("");
                            setFilteredClients(clients);
                            toast.success("¡Descarga completada!", { autoClose: 2000 });
                        }, 1000);
                    }
                }).catch(err => handleError(err));
            } else {
                handleError();
            }
        }).catch(err => handleError(err));
    };

    const handleError = (err) => {
        setTimeout(() => {
            setDataToSearch({ site: "", interval: 9 });
            setInputValue("");
            setDateToFilter("");
            setFilteredClients(clients);
            if (err?.status === 404) {
                toast.warning("No hay datos disponibles", { autoClose: 2000 });
            } else {
                toast.error("¡Error! Reintente o comuníquese con soporte", { autoClose: 2000 });
            }
        }, 1000);
        console.error(err);
    };

    const handleDateChange = (date) => {
        setDateToFilter(date);
    };

    return (
        <div className="full-container">
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className="head-decoration"></div>
            {
                currentTab === 1 ?
                    <div className="container p-4 form-container">
                        <form className="form-search">
                            <h2 className="mb-4">Sábana de Tickets</h2>
                            <div className="mb-3">
                                <label htmlFor="site" className="form-label">Puntos tácticos</label>
                                <input
                                    type="text"
                                    id="site"
                                    name="site"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="Buscar puntos tácticos"
                                    onFocus={() => dataToSearch.interval !== 9 && setShowDropdown(true)}
                                    disabled={dataToSearch.interval === 9}
                                />
                                {showDropdown && dataToSearch.interval !== 9 && (
                                    <ul className="menu-desp">
                                        {filteredClients.length > 0 ? (
                                            filteredClients.map(client => {
                                                return (
                                                    <li key={client.id} onClick={() => handleClientSelect(client.name)}>
                                                        {client.name}
                                                    </li>
                                                )
                                            })
                                        ) : (
                                            <li>No se encontraron coincidencias</li>
                                        )}
                                    </ul>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Intervalo</label>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="all"
                                        name="interval"
                                        value="9"
                                        checked={dataToSearch.interval === 9}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="all">Todo</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="daily"
                                        name="interval"
                                        value="1"
                                        checked={dataToSearch.interval === 1}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="daily">Diario</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="weekly"
                                        name="interval"
                                        value="2"
                                        checked={dataToSearch.interval === 2}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="weekly">Semanal</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="specificDay"
                                        name="interval"
                                        value="3"
                                        checked={dataToSearch.interval === 3}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label" htmlFor="specificDay">Día específico</label>
                                    {dataToSearch.interval === 3 && (
                                        <DatePicker
                                            selected={dateToFilter}
                                            onChange={handleDateChange}
                                            dateFormat="yyyy-MM-dd"
                                            className="form-date-control"
                                            placeholderText="Seleccione una fecha"
                                            disabledKeyboardNavigation
                                        />
                                    )}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-download-csv"
                                    onClick={() => setShowModal(true)}
                                    disabled={(dataToSearch.interval === 3 && dateToFilter === "")}
                                >
                                    DESCARGAR CSV
                                </button>
                            </div>
                        </form>
                        {
                            showModal && <ModalCode modal={showModal} onHide={() => setShowModal(false)} submitData={handleDownloadClick} />
                        }
                        <ToastContainer />
                    </div>
                    :
                    <FormUpdate showModal={showModal} setShowModal={setShowModal} />
            }
        </div>
    );
};

export default Home;