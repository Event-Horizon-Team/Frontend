import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TicketIncremental from "./TicketIncremental";
import '../TicketInformation/BuyingInformation.css';
import {TicketInformationTypes} from "../TicketInformation/TicketInformationTypes";
import BuyingInformation from "../TicketInformation/BuyingInformation";
import './Modal.css'
import TicketNumberView from "../TicketInformation/TicketNumberView";
import ModalBody from "./ModalBody";
import {ModalTypes} from "./ModalType";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    height: 270
};

export default function TicketBuyingModal({ modalType }) {

    const [numberOfBoughtTickets, setNumberOfBoughtTickets] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className={"btn btn-primary m-1"} onClick={handleOpen}> { modalType } </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <div className={"container container-fluid bg-primary pb-1 d-flex align-items-center"}>
                        <button className={"modal-close-button text-light fw-bold"} onClick={handleClose}> X
                        </button>
                        <h1 className={"text-light"}>Ticket Buying Transaction</h1>
                    </div>
                    <div className={"row"}>
                        <div className={"col-3 pe-0"}>
                            <img src={"https://i.ibb.co/drMM7TC/gggggg.jpg"} className={"buy-ticket-picture"}/>
                        </div>
                        <div className={"col-9"}>
                            <ModalBody
                                numberOfBoughtTickets={numberOfBoughtTickets}
                                setNumberOfBoughtTickets={setNumberOfBoughtTickets}/>

                            <div className={"child my-2 mx-3"}>
                                <button className={"btn btn-primary"}> { modalType } </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}