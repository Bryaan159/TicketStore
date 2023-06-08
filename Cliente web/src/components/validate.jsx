import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Swal from 'sweetalert2';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import './validate.css';

function Validate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('all');
  const [scanResult, setScanResult] = useState(null);

  const handleOptionHover = (option) => {
    setActiveOption(option);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  const toggleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleScan = (result) => {
    if (result) {
      showNotification(result);
      setScanResult(result);
    } else {
      showNotificationError(null);
      setScanResult(null);
    }
  };

  useEffect(() => {
    const initializeScanner = () => {
      const scanner = new Html5QrcodeScanner(
        'reader',
        {

          fps: 5,
        },
        true
      );
      scanner.render(handleScan);
    };

    initializeScanner();
  }, []);

  // Notificacion con SweetAlert2
  const showNotification = (result) => {
    if (result) {
      Swal.fire({
        title: 'Se pudo leer su código QR',
        text: 'Código QR leído correctamente!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Abrir enlace',
      }).then((response) => {
        if (response.isConfirmed) {
          window.open(result);
        }
      });
      setScanResult(result);
    } else {
      Swal.fire({
        title: 'No se pudo leer su código QR',
        text: 'Código QR no leído correctamente!',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Volver a intentar',
      });
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <Link to="/home">LOGO</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
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
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li className="cartI">
              <a href="#">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </a>
            </li>
            <li className="barsI">
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


      <section className="sectionValidate">
        <h1 className="scantodiscover">
          Scan to discover!
          <hr />
        </h1>
        {scanResult ? (
          <div></div>
        ) : (
          <div id="reader"></div>
        )}
      </section>
    </div>
  );
}

export default Validate;
