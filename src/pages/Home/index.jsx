import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import clients from '../../constants/clients';
import connections from '../../connections';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const [dataToSearch, setDataToSearch] = useState({
        site: "",
        interval: 1,
    });

    const [filteredClients, setFilteredClients] = useState([]);

    const generateCSV = (data) => {
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

        const { site, interval } = dataToSearch;

        const now = new Date();
        const date = now.toISOString();

        // let date = "2024-11-29T23:57:31.000Z";

        const daily = interval === 1;
        const weekly = interval === 2;

        const clientName = "Covivi";

        const newData = {
            date,
            daily,
            weekly,
            clientName,
            site,
        };

        let newFileName = `SABANA_${daily ? "DAILY" : "WEEKLY"}-${date}_${clientName}`;

        if (site !== "") {
            newFileName += site.split("-")[0].trim();
        };

        newFileName += ".csv";

        connections.genTokenZoho().then(response => {
            toast.info("Descarga en curso, por favor espere...", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
            });
            if (response.data.success) {
                const tokenZoho = response.data.data.auth_token;
                connections.exportTickets(tokenZoho, newData).then(resp => {
                    if (resp.data.success) {
                        const { data } = resp.data;

                        const arrayToCSV = generateCSV(data);

                        downloadCSV(arrayToCSV, newFileName);

                        setTimeout(() => {
                            setInputValue("");
                            setDataToSearch({ site: "", interval: 1 });
                            setFilteredClients([]);

                            toast.success("¡Descarga completada!", {
                                position: "top-center",
                                autoClose: 2000,
                                hideProgressBar: true,
                            });
                        }, 1000);
                    };
                })
                    .catch(err => {
                        setTimeout(() => {
                            setInputValue("");
                            setDataToSearch({ site: "", interval: 1 });
                            setFilteredClients([]);

                            if (err.status === 404) {
                                toast.warning("No hay datos disponibles", {
                                    position: "top-center",
                                    autoClose: 2000,
                                    hideProgressBar: true,
                                });
                            } else {
                                toast.error("¡Error! Reintente o comuníquese con soporte", {
                                    position: "top-center",
                                    autoClose: 2000,
                                    hideProgressBar: true,
                                });
                            }
                        }, 1000);
                        console.error(err)
                    });
            } else {
                setTimeout(() => {
                    setInputValue("");
                    setDataToSearch({ site: "", interval: 1 });
                    setFilteredClients([]);

                    toast.warning("¡Error! Comuníquese con soporte", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                    });
                }, 1000);
            }
        })
            .catch(err => {
                setTimeout(() => {
                    setInputValue("");
                    setDataToSearch({ site: "", interval: 1 });
                    setFilteredClients([]);

                    toast.warning("¡Error! Comuníquese con soporte", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                    });
                }, 3000);
                console.error(err)
            });
    };

    const handleClientSelect = (site) => {
        setDataToSearch((prevData) => ({
            ...prevData,
            site,
        }));
        setInputValue(site);
        setFilteredClients([]);
    };

    const handleInputFocus = () => {
        if(inputValue === ""){
            setFilteredClients(clients);
        };
    };

    const handleInputBlur = () => {
        if(inputValue === ""){
            setFilteredClients([]);
        };
    };

    const isButtonDisabled = inputValue !== dataToSearch.site;

    useEffect(() => {
        if (inputValue === "") {
            setFilteredClients(clients);
        } else {
            setFilteredClients(
                clients.filter(client =>
                    client.name.toLowerCase().includes(inputValue.toLowerCase()) && client.name !== dataToSearch.site
                )
            );
        };
    }, [inputValue, dataToSearch.site]);

    return (
        <div className="full-container">
            <div className="head-decoration"></div>
            <div className="container p-4 form-container">
                <form className="form-search">
                    <h2 className="mb-4">Sábana de Tickets</h2>
                    <div className="mb-3">
                        <label htmlFor="site" className="form-label">Nombre de sitio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="site"
                            name="site"
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            placeholder="Buscar por sitio..."
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
