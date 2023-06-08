import { useState } from "react";
import { ticket } from './dataTickets';

export const ConfirmTransfer = ({transfer, transferFlow}) => {
    const [tickets, setTickets] = useState(ticket);
    const [dataConfirm, setDataConfirm] = useState(transfer);

    console.log(dataConfirm);

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
            {dataConfirm.dataTicket.map((t, i) => (
                <div key={i} className='ticketConfirmed'>
                    <div className='dataTicket'>{t.trasnferTi.name}</div>
                    <div className='dataTicket'>{t.trasnferTi.description}</div>
                    <div className='dataTicket'>{t.trasnferTi.location}</div>
                    <div className='dataTicket'>$ {t.trasnferTi.price}</div>
                    <div className='dataTicket'>transferring: {t.transfer}</div>
                </div>
            ))}
            <h3>transferring to: </h3>
            <p>{dataConfirm.dataUser.userEmail}</p>
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" onClick={handleBack}> Back </button>
            <button className="ContinueBtn" onClick={handleConfirm}> Confirm </button>
        </div>
    </>)
}

export default ConfirmTransfer;