import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import clients from '../../constants/clients';
import connections from '../../connections';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [dataToSearch, setDataToSearch] = useState({
        site: "",
        interval: 1,
    });
    const [filteredClients, setFilteredClients] = useState([]);
    const [dateToFilter, setDateToFilter] = useState("");
    const [isClientSelected, setIsClientSelected] = useState(false); // Estado para manejar si un cliente fue seleccionado

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
        if (value === "") {
            setDataToSearch((prevData) => ({
                ...prevData,
                site: value,
            }));
        };
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        if (value !== 3) {
            setDateToFilter("");
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
        };

        const date = now.toISOString();
        const daily = interval === 1;
        const weekly = interval === 2;
        const specifies = interval === 3;
        const clientName = "Covivi";
        const newData = {
            date,
            daily,
            weekly,
            specifies,
            clientName,
            site,
        };

        let newFileName = `SABANA_${daily ? "DAILY" : weekly ? "WEEKLY" : "FILTER_BY_DAY"}-${date}_${clientName}`;

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
                            setIsClientSelected(false); // Resetear el estado de selección del cliente
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
                            setDateToFilter("");
                            setFilteredClients([]);
                            setIsClientSelected(false); // Resetear el estado de selección del cliente

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
                        console.error(err);
                    });
            } else {
                setTimeout(() => {
                    setInputValue("");
                    setDataToSearch({ site: "", interval: 1 });
                    setFilteredClients([]);
                    setIsClientSelected(false); // Resetear el estado de selección del cliente
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
                    setIsClientSelected(false); // Resetear el estado de selección del cliente
                    toast.warning("¡Error! Comuníquese con soporte", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                    });
                }, 3000);
                console.error(err);
            });
    };

    const handleClientSelect = (site) => {
        setDataToSearch((prevData) => ({
            ...prevData,
            site,
        }));
        setInputValue("");
        setFilteredClients([]);
        setIsClientSelected(true); // Marcar que un cliente fue seleccionado
    };

    const handleInputFocus = () => {
        if (!isClientSelected && inputValue === "") {
            setFilteredClients(clients);
        };
    };

    const handleInputBlur = () => {
        if (inputValue === "") {
            setFilteredClients([]);
            setInputValue("");
            setDataToSearch((prevData) => ({
                ...prevData,
                site: "",
            }));
        };
    };

    const handleDateChange = (date) => {
        setDateToFilter(date);
    };

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
    }, [dataToSearch.site]);

    return (
        <div className="full-container">
            <div className="head-decoration"></div>
            <div className="container p-4 form-container">
                <form className="form-search">
                    <h2 className="mb-4">Sábana de Tickets</h2>
                    <div className="mb-3">
                        <label htmlFor="site" className="form-label">Nombre de sitio</label>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input
                                type="text"
                                className="form-control"
                                style={{
                                    width: "40%"
                                }}
                                id="site"
                                name="site"
                                disabled={isClientSelected} // Deshabilitar el input cuando un cliente es seleccionado
                                value={inputValue}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                placeholder="Buscar por sitio..."
                            />
                            {
                                dataToSearch.site &&
                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "40%" }}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setDataToSearch((prevData) => ({
                                                ...prevData,
                                                site: "",
                                            }));
                                            setIsClientSelected(false); // Resetear el estado de selección de cliente
                                        }}
                                    >
                                        {dataToSearch.site} X
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    {filteredClients.length > 0 && !isClientSelected && (
                        <ul className="list-group mt-2 clients-filter">
                            {filteredClients.map((client, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleClientSelect(client.name)}
                                    className="list-group-item"
                                >
                                    {client.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Intervalo</label>
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interval"
                                    id="daily"
                                    value={1}
                                    checked={dataToSearch.interval === 1}
                                    onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="daily">Diario</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interval"
                                    id="weekly"
                                    value={2}
                                    checked={dataToSearch.interval === 2}
                                    onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="weekly">Semanal</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interval"
                                    id="specify"
                                    value={3}
                                    checked={dataToSearch.interval === 3}
                                    onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="specify">Especificar</label>
                                {
                                    dataToSearch.interval === 3 &&
                                    <DatePicker
                                        id="date-picker"
                                        selected={dateToFilter}
                                        onChange={handleDateChange}
                                        dateFormat="yyyy-MM-dd"
                                        disabled={dataToSearch.interval !== 3}
                                        className="form-date-control"
                                        placeholderText="Seleccione una fecha"
                                        disabledKeyboardNavigation
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleDownloadClick}
                            // disabled={inputValue !== dataToSearch.site}
                            disabled={(dataToSearch.interval === 3 && dateToFilter === "")}
                        >
                            DESCARGAR CSV
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Home;
