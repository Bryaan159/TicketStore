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
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './changePassword.css';
const ChangePassword = ({ changePassword }) => {
    // Definicion de variables para Header y menu lateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('barsI');

    //Verificar que las contraseñas en ambos parametros son iguales
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Funcion que nos permite ver la contraseña
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    //Notificacion para SweetAlert2
    const handleCreatePassword = () => {
        if (newPassword !== confirmPassword) {
            Swal.fire(
                'Error',
                'Passwords do not match',
                'error'
            );
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You want to change your password!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, change it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {

            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Change your password!',
                    'Your password was changed',
                    'success'
                );
                changePassword(newPassword);
                setNewPassword('');
                setConfirmPassword('')

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your password is safe :)',
                    'error'
                )
            }
        })
    }

    const togglePasswordVisibility = (event) => {
        const inputField = event.target.parentNode.querySelector('input');
        if (inputField.type === 'password') {
            inputField.type = 'text';
        } else {
            inputField.type = 'password';
        }
        if (event.target.id === 'toggleNewPassword') {
            setShowNewPassword(!showNewPassword);
        } else if (event.target.id === 'toggleConfirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

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
        <div className="rectangle45">
            <h1 className="titlePassword">CREATE PASSWORD</h1>
            <div className="line14"></div>
            <p className="description1">
                <FontAwesomeIcon icon={faInfoCircle} className="iconSize2" />
                Your password must be complex with alphanumeric characters.
                Never share your password.
            </p>
            <form class="formPassword">
                <label className="label1">New Password</label>
                <div class="input-container">
                    <input
                        name="newPassword"
                        placeholder="New Password"
                        className="input"
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={showNewPassword ? faEye : faEyeSlash}
                        className={`iconSize3 ${showNewPassword ? 'show' : 'hide'}`}
                        id="toggleNewPassword"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <label className="label">Confirm Password</label>
                <div class="input-container">
                    <input
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}


                    />
                    <FontAwesomeIcon
                        icon={showConfirmPassword ? faEye : faEyeSlash}
                        className={`iconSize3 ${showConfirmPassword ? 'show' : 'hide'}`}
                        id="toggleConfirmPassword"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <button className="btnSave1" type='button' onClick={handleCreatePassword}>CREATE PASSWORD</button>
            </form>
        </div>


    </>)

}
export default ChangePassword;