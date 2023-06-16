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
import React, { useState } from 'react';
import "./emergency.css"

const Emergency = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('all');

    const handleOptionHover = (option) => {
        setActiveOption(option);
    };

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    const toggleMenuClose = () => {
        setMenuOpen(false);
    }

    return (
        <div className='main-container'>
            {/* Aqui esta el menu de navegacion */}
            <header className='header'>
                <div className='logo'> <Link to="/home">TICKETS</Link></div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li className='colorTag'>All</li>
                        <li className='colorTag'>New</li>
                        <li className='colorTag'>Cultural</li>
                        <li className='colorTag'>Artistic</li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faSearch} />
                        </li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </li>
                        <li className='barsI'>
                            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                        </li>
                    </ul>
                </nav>
            </header>
            {menuOpen && (
                <div className="menu-container">
                    <ul className="menu-list">
                        <li><FontAwesomeIcon icon={faXmark} onClick={toggleMenuClose} id='closeMenu' /></li>
                        <li>Dashboard</li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faTicketSimple} className='iconSize' />
                            Resume
                        </li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faShuffle} className='iconSize' />
                            Transfer
                        </li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faChartSimple} className='iconSize' />
                            Statistic
                        </li>
                        <li className='colorTag'>
                            <FontAwesomeIcon icon={faQrcode} className='iconSize' />
                            Validate
                        </li>
                        <Link to="/settings" className='colorLink'><li>
                            <FontAwesomeIcon icon={faGears} className='iconSize' />
                            Settings
                        </li></Link>
                        <Link to="/"><button>LogOut</button></Link>
                    </ul>
                </div>
            )
            }
            {/*Aqui va todo lo de boton de emergencia*/}
            <div className='emergency-container'>
                <img src="https://squareit.in/img/pages/MAINTENANCE-862x762.png" atl="emergencia" />
                <h2 className='title'>UPS SORRY</h2>
                <h5>Our website is currently under maintenance so sorry for any incovenience</h5>
            </div>

        </div>
    );
}

export default Emergency;