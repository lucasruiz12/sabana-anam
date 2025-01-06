import React from 'react';
import './style.css';

const Navbar = ({ currentTab, setCurrentTab }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => setCurrentTab(1)}>
                            <p className={`nav-link${currentTab === 1 ? " active" : ""}`} aria-current="page">Descarga de sábana</p>
                        </li>
                        {/* <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => setCurrentTab(2)}>
                            <p className={`nav-link${currentTab === 2 ? " active" : ""}`}>Actualización de tickets</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;