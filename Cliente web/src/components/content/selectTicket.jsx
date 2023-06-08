import { useState } from "react";
import { ticket } from './dataTickets';

export const SelectTicket = ({ dataTicket, transferFlow}) => {
    // Variables para manejo de tickets y cantidad de tickets
    const [tickets, setTickets] = useState(ticket);
    const [amount, setAmount] = useState(Array(ticket.length).fill(0));
    const [ticketsToTransfer, setTicketsToTransfer] = useState([]);
    // Funciones de boton de seleccion de tickets
    const handleLessAmount = (index) => {
        if (amount[index] > 0) {
            const saveTicket = [...tickets];
            const updatedAmounts = [...amount];
            updatedAmounts[index]--;
            setAmount(updatedAmounts);
        }
    }
    const HandlePlusAmount = (index, ticketAm) => {
        if (amount[index] < ticketAm) {
            const saveTicket = [...tickets];
            const updatedAmounts = [...amount];
            updatedAmounts[index]++;
            setAmount(updatedAmounts);
        }
    }
    // Funcion del boton de continuar
    const handleContinue = () => {
        if(!amount.every((a) => a === 0)) {
            amount.map((a, i) => {
                if (a > 0) {
                    ticketsToTransfer.push({ trasnferTi: tickets[i], transfer: a });
                }
            });
            dataTicket(ticketsToTransfer);
            transferFlow(1);
        } else {
            alert('You must select at least one ticket to continue');
        }

    }
    return (<>
        <div className="selectTicket">
            {tickets.map((t, i) => (
                <div key={i} className='ticket'>
                    <div className='dataTicket'>{t.name}</div>
                    <div className='dataTicket'>{t.description}</div>
                    <div className='dataTicket'>{t.location}</div>
                    <div className='dataTicket'>$ {t.price}</div>
                    <div className='dataTicket'>tickets: {t.amount}</div>
                    <button className='lessBtn' onClick={() => handleLessAmount(i)}> - </button>
                    <div className="amount">{amount[i]}</div>
                    <button className='PlusBtn' onClick={() => HandlePlusAmount(i, t.amount)}> + </button>
                </div>
            ))}
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" style={{ display: "none" }} > Back </button>
            <button className="ContinueBtn" onClick={handleContinue} > Continue </button>
        </div>
    </>)
}

export default SelectTicket;