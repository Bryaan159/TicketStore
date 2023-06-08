import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//import { Menu } from 'antd';
function Settings() {
    // Definicion de variables para Header y menu lateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('barsI');
    // Definicion de variables para manejo de transferencia
    const [transfer, setTransfer] = useState(0);

    // funciones para Header y menu lateral
    const handleOptionHover = (option) => {
        setActiveOption(option);
    };
    //Funcion que nos permite abrir el menu lateral
    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    //Funcion que nos permite cerrar el menu lateral
    const toggleMenuClose = () => {
        setMenuOpen(false);
    }


    return (<>
        {/* Aqui esta el menu de navegacion */}
        <header className='header'>
                <div className='logo'><a href="#">SETTINGS</a></div>
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
                        <li><FontAwesomeIcon icon={faXmark} onClick={toggleMenuClose} /></li>
                        <li>Dashboard</li>
                        <li>Resume</li>
                        <Link to="/transfer"><li>Transfer</li></Link>
                        <Link to="/statistics"><li>Statistic</li></Link>
                        <Link to="/validate"><li>Validate</li></Link>
                        <li>Settings</li>
                        <Link to="/"><button>LogOut</button></Link>
                    </ul>
                </div>
            )}
            {/* Aqui termina el menu de navegacion */}
            {/* Aqui empieza el contenido de los settings */}
            {/* <div>
                <Menu>
                    items={[
                        {label:"Dashboard", icon: <HomeOutlined />},
                    ]
                    
                    }
                </Menu>
            </div> */}

    </>)



}
export default Settings;