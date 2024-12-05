import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import clients from '../../constants/clients';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const [dataToSearch, setDataToSearch] = useState({
        client_name: "",
        interval: 1,
    });

    const [filteredClients, setFilteredClients] = useState([]);

    useEffect(() => {
        if (inputValue === "") {
            setFilteredClients([]);
        } else {
            setFilteredClients(
                clients.filter(client =>
                    client.name.toLowerCase().includes(inputValue.toLowerCase()) && client.name !== dataToSearch.client_name
                )
            );
        };
    }, [inputValue, dataToSearch.client_name]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setDataToSearch((prevData) => ({
            ...prevData,
            interval: parseInt(value),
        }));
    };

    const handleDownloadClick = () => {
        console.log(dataToSearch);
        toast.info("Descarga en curso, por favor espere...", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
        });

        setTimeout(() => {
            setInputValue("");
            setDataToSearch({ client_name: "", interval: 1 });
            setFilteredClients([]);

            toast.success("¡Descarga completada!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
            });
        }, 3000);
    };

    const handleClientSelect = (clientName) => {
        setDataToSearch((prevData) => ({
            ...prevData,
            client_name: clientName,
        }));
        setInputValue(clientName);
        setFilteredClients([]);
    };

    const isButtonDisabled = inputValue !== dataToSearch.client_name;

    return (
        <div className="full-container">
            <div className="head-decoration"></div>
            <div className="container p-4 form-container">
                <form className="form-search">
                    <h2 className="mb-4">Sábana de Tickets</h2>
                    <div className="mb-3">
                        <label htmlFor="client_name" className="form-label">Nombre de Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="client_name"
                            name="client_name"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Buscar Cliente..."
                        />
                        {filteredClients.length > 0 && (
                            <ul className="list-group mt-2 clients-filter">
                                {filteredClients.map((client) => (
                                    <li
                                        key={client.id}
                                        className="list-group-item"
                                        onClick={() => handleClientSelect(client.name)}
                                    >
                                        {client.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Intervalo</label>
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
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleDownloadClick}
                        disabled={isButtonDisabled}
                    >
                        DESCARGAR CSV
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Home;
