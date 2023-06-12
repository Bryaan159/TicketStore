import "./loginForm.css";
import React, { useState } from "react";
//toast
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const notifyBad = () => {
    toast.error('Todos los campos debera ser llenados', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
    });
};
const notifyGood = () => {
    toast.success('Bienvenido', {
        position: toast.POSITION.TOP_RIGHT
    });
};



const LoginForm = ({ setUser }) => {
    // Declarar las constantes para nuestro login
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    // Administrar los errores
    const [error, setError] = useState(false);

    //Variables para poder cambiarlo las contarseñas
    const [correctPassword, setCorrectPassword] = useState("123abc");

    // Variable de estado para controlar si el usuario ha iniciado sesión correctamente
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userEmail === "abc123" && (password === correctPassword || password === newPassword)) {
            notifyGood()
            setError(false);
            setUser(userEmail);
            setIsLoggedIn(true);

        } else {
            // Como se encuentran los parámetros vacíos, no permite el ingreso
            setError(true)
            notifyBad()

        }
    };

    //Cambio de contraseña
    const changePassword = (newPassword) => {
        setCorrectPassword(newPassword);
    }

    return (
        <section>
            <form className="cover" onSubmit={handleSubmit}>
                {/* Aquí es donde irá todo lo que tenga que ver con el Login */}
                <h1 className="h1Login">Log in</h1>

                <div className="formElement">
                    <input
                        type="text"
                        placeholder="Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div className="formElement">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        changePassword={changePassword} correctPassword={correctPassword}
                    />
                </div>
                {/* Toda la parte de botones */}
                <div className="buttonContainer">
                    <button type="submit" className="loginBtn">
                        Enter
                    </button>
                    <ToastContainer />

                    <div className="loginGoogle">
                        <img src={"https://img.freepik.com/iconos-gratis/google_318-278809.jpg"} alt="iconoGoogle" className="googleIcon" />
                        Continue with Google
                    </div>
                </div>
            </form>
        </section>


    );
};

export default LoginForm;
