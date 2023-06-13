import { useState } from "react";
import { ticket } from './dataTickets';
import Swal from 'sweetalert2';

export const ConfirmTransfer = ({transfer, transferFlow}) => {
    const [tickets, setTickets] = useState(ticket);
    const [dataConfirm, setDataConfirm] = useState(transfer);

    console.log(dataConfirm);
    // Funciones para alerta de SweetAlert2
    const handleAlert = () => {
        Swal.fire({
            position: 'top-end',
            text: 'Tranferencia confirmada',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
    }
    // Funciones para navegacion de transferencia
    const handleBack = () => {
        transferFlow(1);
    }
    const handleConfirm = () => {
        handleAlert();
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
            <p id="userEmail">{dataConfirm.dataUser.userEmail}</p>
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" onClick={handleBack}> Back </button>
            <button className="ContinueBtn" onClick={handleConfirm}> Confirm </button>
        </div>
    </>)
}

export default ConfirmTransfer;