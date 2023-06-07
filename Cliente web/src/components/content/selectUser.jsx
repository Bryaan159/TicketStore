import { useState } from "react";
import { ticket } from './dataTickets';

export const SelectUser = ({dataTicket, transferFlow}) => {
    const [tickets, setTickets] = useState(ticket);

    // Funciones para navegacion de transferencia
    const handleBack = () => {
        transferFlow(0);
    }
    const handleContinue = () => {
        transferFlow(2);
    }

    return (<>
        <form onSubmit={handleContinue}>
        <div className="selectUser">
            <label htmlFor="userNameorEmail">User's name or Email</label>
            <input type="text" name="userNameorEmail" id="userNameorEmail" required/>
            <label htmlFor="email">Your Email</label>
            <input type="email"name="email" id="email" required/>
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" onClick={handleBack}> Back </button>
            <button type="submit" className="ContinueBtn" > Continue </button>
        </div>
        </form>
    </>)
}

export default SelectUser;