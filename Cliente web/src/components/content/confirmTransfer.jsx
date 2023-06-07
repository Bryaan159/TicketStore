import { useState } from "react";
import { ticket } from './dataTickets';

export const ConfirmTransfer = ({dataTicket, transferFlow}) => {
    const [tickets, setTickets] = useState(ticket);

    // Funciones para navegacion de transferencia
    const handleBack = () => {
        transferFlow(1);
    }
    const handleConfirm = () => {
        alert('Transfer confirmed');
        transferFlow(0);
    }

    return (<>
        <div className="confirmTransfer">
            <h3>Your(s) ticket(s): </h3>
            {tickets.map((t, i) => (
                <div key={i} className='ticketConfirmed'>
                    <div className='dataTicket'>{t.name}</div>
                    <div className='dataTicket'>{t.description}</div>
                    <div className='dataTicket'>{t.location}</div>
                    <div className='dataTicket'>$ {t.price}</div>
                    <div className='dataTicket'>tickets: {t.amount}</div>
                </div>
            ))}
            <h3>Transfering to: </h3>
            <p>UserName or Email to transfer</p>
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" onClick={handleBack}> Back </button>
            <button className="ContinueBtn" onClick={handleConfirm}> Confirm </button>
        </div>
    </>)
}

export default ConfirmTransfer;