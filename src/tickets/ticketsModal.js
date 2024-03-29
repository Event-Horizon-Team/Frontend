import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import TicketApis from "../Apis/EventApis/TicketApis";
import {getUserId} from "../Authentication/UserAuthentication";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "30px"

};

export default function TicketsModal({tickets}) {

    const navigate = useNavigate();
    const [ticketsNumber, setTicketsNumber] = React.useState(Array(tickets.length).fill(0))
    const [ticketsPrice, setTicketsPrice] = React.useState(Array(tickets.length).fill(0))

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
        setTicketsNumber(Array(tickets.length).fill(0))
        setTicketsPrice(Array(tickets.length).fill(0))
    };
    const handleClose = () => {
        setOpen(false)
        setTicketsNumber(Array(tickets.length).fill(0))
        setTicketsPrice(Array(tickets.length).fill(0))
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = Array(tickets.length);
        tickets.forEach((ticket, index) => {
            data[index] = {
                seatTypeId: ticket.seatTypeId,
                numOfTickets: ticketsNumber[index]
            }
        })
        try{
            const response = await TicketApis.put("buyTicket/" + getUserId(), data)
            navigate(0)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}
                    variant="contained"
                    style={
                        {
                            position: "absolute",
                            top: "20px",
                            right: "40px",
                        }
                    }
            >Buy tickets</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Buy tickets
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <form onSubmit={handleSubmit} className={"ticket-form"}>
                            <div className="ticket-modal-body">
                                {
                                    tickets.map((ticket, index) => {
                                            return <div className="buy-row">
                                                <div className="ticket-name"> {ticket.name} </div>
                                                <TextField
                                                    id="outlined-basic" label="Number of tickets" variant="outlined" type="number"
                                                    value={ticketsNumber[index] || 0}  // Set the default value to 0
                                                    onChange={(e) => {
                                                        const inputValue = parseInt(e.target.value, 10);  // Parse input as an integer
                                                        if (!isNaN(inputValue)) {
                                                            let newTicketsNumber = [...ticketsNumber];
                                                            newTicketsNumber[index] = inputValue;
                                                            setTicketsNumber(newTicketsNumber);

                                                            let newTicketsPrice = [...ticketsPrice];
                                                            newTicketsPrice[index] = inputValue * ticket.price;
                                                            setTicketsPrice(newTicketsPrice);
                                                        }
                                                    }}
                                                />
                                                <div className="ticket-price"> {ticket.price} $</div>
                                            </div>
                                        }
                                    )
                                }
                                <Button variant="contained" type={"submit"}>Buy The Ticket</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}