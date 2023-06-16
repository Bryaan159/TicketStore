import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { BarChar } from './content/barChar';
import { PieChar } from './content/pieChar';

import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import "./statistics.css"

export const ViewStatistic = ({ title, viewComponent }) => {
    // Definicion de variables para Header y menu lateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('');

    // funciones para Header y menu lateral
    const handleOptionHover = (option) => {
        setActiveOption(option);
    };
    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    const toggleMenuClose = () => {
        setMenuOpen(false);
    }
    // Funcion para regresar a componente anterior
    const handleBack = () => {
        viewComponent(false);
    }

    return (
        <>
            <div className='main-container'>
                {/* Aqui esta el menu de navegacion */}
                <header className='header'>
                    <div className='logo'> <Link to="/home">TICKETS</Link></div>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li
                                className={`all ${activeOption === 'all' ? 'active' : ''}`}
                                onMouseEnter={() => handleOptionHover('all')}
                            >
                                <Link to="/home">All</Link>
                            </li>
                            <li
                                className={`new ${activeOption === 'new' ? 'active' : ''}`}
                                onMouseEnter={() => handleOptionHover('new')}
                            >
                                <Link to="/event">New</Link>
                            </li>
                            <li
                                className={`cultural ${activeOption === 'cultural' ? 'active' : ''}`}
                                onMouseEnter={() => handleOptionHover('cultural')}
                            >
                                <Link to="/cultural">Cultural</Link>
                            </li>
                            <li
                                className={`artistic ${activeOption === 'artistic' ? 'active' : ''}`}
                                onMouseEnter={() => handleOptionHover('artistic')}
                            >
                                <Link to="/artistic">Artistic</Link>
                            </li>
                            <li
                                className={`searchI ${activeOption === 'searchI' ? 'active' : ''}`}
                                onMouseEnter={() => handleOptionHover('searchI')}
                            >
                                <a href="#">
                                    <Link to="/search"> <FontAwesomeIcon icon={faSearch} /></Link>
                                </a>
                            </li>
                            <li className='cartI'>
                                <a href="#">
                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                </a>
                            </li>
                            <li className='barsI'>
                                <a href="#">
                                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {menuOpen && (
                    <div className="menu-container">
                        <ul className="menu-list">
                            <li><FontAwesomeIcon icon={faXmark} onClick={toggleMenuClose} id='closeMenu' /></li>
                            <li>Dashboard</li>
                            <Link><li>
                                <FontAwesomeIcon icon={faTicketSimple} className='iconSize' />
                                Resume
                            </li></Link>
                            <Link to="/transfer" className='colorLink'>
                                <li>
                                    <FontAwesomeIcon icon={faShuffle} className='iconSize' />
                                    Transfer
                                </li>
                            </Link>
                            <Link to="/statistics" className='colorLink'><li>
                                <FontAwesomeIcon icon={faChartSimple} className='iconSize' />
                                Statistic
                            </li></Link>
                            <Link to="/validate" className='colorLink'><li>
                                <FontAwesomeIcon icon={faQrcode} className='iconSize' />
                                Validate
                            </li></Link>
                            <Link to="/settings" className='colorLink'><li>
                                <FontAwesomeIcon icon={faGears} className='iconSize' />
                                Settings
                            </li></Link>
                            <Link to="/"><button>LogOut</button></Link>
                        </ul>
                    </div>
                )}

                {/* Seccion del contenido de las estadisticas */}
                <main className="charContainer">
                    <button onClick={handleBack} > Back </button>
                    <h1>{title}</h1>
                    <div className="ticketCards">
                        <div className="dataTickets">
                            <p>Total Tickets</p>
                            <h2>400</h2>
                            <FontAwesomeIcon icon={faTicket} size="2xl" style={{ color: "#ffffff", paddingTop: "10px", gridRow: "1 / 3" }} />
                        </div>
                        <div className="dataTickets1">
                            <p>Total Sales</p>
                            <h2>$8000.00</h2>
                            <FontAwesomeIcon icon={faSackDollar} size="2xl" style={{ color: "#ffffff", paddingTop: "10px", gridRow: "1 / 3" }} />
                        </div>
                        <div className="dataTickets2">
                            <p>Total Clients</p>
                            <h2>100</h2>
                            <FontAwesomeIcon icon={faPeopleGroup} size="2xl" style={{ color: "#ffffff", paddingTop: "10px", gridRow: "1 / 3" }} />
                        </div>
                    </div>

                    <div className="locationChar">
                        < BarChar />
                    </div>

                    <div className="eventPieChar">
                        <h2>Ticket sales by location</h2>
                        < PieChar />
                    </div>
                    <button onClick={handleBack} > Back </button>
                </main>
            </div>
        </>
    );
}

export default ViewStatistic;