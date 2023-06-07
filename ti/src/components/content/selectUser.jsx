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
            <div className="">

            </div>
        </div>
        <div className="buttonsTickets">
            <button className="backBtn" > Back </button>
            <button className="ContinueBtn" > Continue </button>
        </div>
    </>)
}

export default SelectTicket;