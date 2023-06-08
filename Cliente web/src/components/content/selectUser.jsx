import { useState } from "react";
import { ticket } from './dataTickets';

export const SelectUser = ({dataUserTransfer, transferFlow}) => {
    const [tickets, setTickets] = useState(ticket);
    const [formData, setFormData] = useState({});

    // Funciones para navegacion de transferencia
    const handleBack = () => {
        transferFlow(0);
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleContinue = (e) => {
        e.preventDefault();
        dataUserTransfer(formData);
        transferFlow(2);
    }

    return (<>
        <form onSubmit={handleContinue}>
            <div className="selectUser">
                <label htmlFor="userEmail">User's Email</label>
                <input type="text" name="userEmail" id="userEmail" onChange={handleInputChange} required/>
                <label htmlFor="email">Your Email</label>
                <input type="email"name="email" id="email" onChange={handleInputChange} required/>
            </div>
            <div className="buttonsTickets">
                <button className="backBtn" onClick={handleBack}> Back </button>
                <button type="submit" className="ContinueBtn" > Continue </button>
            </div>
        </form>
    </>)
}

export default SelectUser;