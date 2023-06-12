import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import "./setting.css"
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
        {/* Aqui termina el menu de navegacion */}
        {/* Aqui empieza el contenido de los settings */}
        <div className="rectangle44">

            {/* <h1 className='mydetails'>My account</h1>
                <div id="line15" className="line15"></div> */}
            <div className="group187">
                <div id="group187" className="group187">
                    <div className="group186">
                        <h3 className="mydetails">
                            My details
                        </h3>
                        <h4 className="personalinformation">
                            Personal Information
                        </h4>
                        <div id="line15" className="line15"></div>
                    </div>
                    <div className="description">
                        <p>
                            El apartado de información detallada del usuario proporciona <br /> datos más específicos y completos acerca del usuario,
                            y otra información personal relevante.Aquí se puede encontrar información detallada para tener un panorama completo
                            de la identidad del usuario.
                        </p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button class="button" id='btnChange'>
                    <Link to="/changePassword" className='letra'><FontAwesomeIcon icon={faLock} className='iconSize1' /> Change Password</Link>
                </button>
                <div className='button' id='btnMaintance'>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className='iconSize1' />
                    Maintenance

                </div>
                <button class="button" id='btnManage'>
                    <Link to="/managePermision" className='letra'><FontAwesomeIcon icon={faListCheck} className='iconSize1' /> Manage Permissions</Link>
                </button>
            </div>
            <div className="button-container-inner">
                <button class="button-active">
                    Active
                </button>
            </div>
        </div>




    </>)



}
export default Settings;