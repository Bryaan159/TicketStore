import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ViewStatistic } from './viewStatistic';
import dataCard from './dataAll';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import "./statistics.css"

function Statistics() {
    // Definicion de variables para Header y menu lateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('');
    // Definicion de variables de Cards (datos quemados)
    const [cards, setCards] = useState(dataCard);
    // Definicion de variable de navegacion entre vistas
    const [title, setTitle] = useState('');
    const [viewComponent, setViewComponent] = useState(false);

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
    // Funcion evento click de boton Statistic
    const handleStatistic = (title) => {
        setTitle(title);
        setViewComponent(true);
    }
    const handleView = (viewComponent) => {
        setViewComponent(viewComponent);
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

                {/* Seccion para visualizar sus estadisiticas individuales */}
                {!viewComponent ? (
                    <section className='sectionCards'>
                        <div className="container">
                            {cards.map((card, i) => (
                                <div key={i} className='card'>
                                    <div className='baseRectangle'></div>
                                    <img className='card-image' src={card.picture} alt="imagenAlternativa" />
                                    <div className='title'>{card.title}</div>
                                    <div className='text'>{card.text}</div>
                                    <div className='price'>{card.precio}</div>
                                    <button className='stdst-btn' onClick={() => handleStatistic(card.title)}>
                                        Statistic
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <ViewStatistic title={title} viewComponent={handleView} />
                )}
            </div>
        </>
    );
}

export default Statistics;