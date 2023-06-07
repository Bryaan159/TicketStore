import { useState } from "react";
import { ticket } from './dataTickets';

export const SelectTicket = (props) => {
    const [tickets, setTickets] = useState(ticket);
    const [amount, setAmount] = useState(Array(ticket.length).fill(0));

    const handleLessAmount = (index) => {
        if (amount[index] > 0) {
            const updatedAmounts = [...amount];
            updatedAmounts[index]--;
            setAmount(updatedAmounts);
        }
    }
    const HandlePlusAmount = (index, ticketAm) => {
        if (amount[index] < ticketAm) {
            const updatedAmounts = [...amount];
            updatedAmounts[index]++;
            setAmount(updatedAmounts);
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
                    <div className='dataTicket'>Amount: {t.amount}</div>
                    <button className='lessBtn' onClick={() => handleLessAmount(i)}> - </button>
                    <div className="amount">{amount[i]}</div>
                    <button className='PlusBtn' onClick={() => HandlePlusAmount(i, t.amount)}> + </button>
                </div>
            ))}
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" style={{ display: "none" }} > Back </button>
            <button className="ContinueBtn" > Continue </button>
        </div>
    </>)
}

export default SelectTicket;