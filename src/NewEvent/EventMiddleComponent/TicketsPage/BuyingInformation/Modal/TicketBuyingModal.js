import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TicketIncremental from "./TicketIncremental";
import '../BuyingInformation.css';
import {TicketInformationTypes} from "../TicketInformation/TicketInformationTypes";
import BuyingInformation from "../TicketInformation/BuyingInformation";
import './Modal.css'
import TicketNumberView from "../TicketInformation/TicketNumberView";

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

export default function TicketBuyingModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className={"btn btn-primary m-1"} onClick={handleOpen}>Buy</button>
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
                            <div className={"my-2 me-2 d-flex flex-column my-modal-body"}>
                                <h2 className={"display-5 border-bottom border-2 modal-border me-1"}>Ticket Title</h2>
                                <div className={"d-flex justify-content-between parent"}>
                                    <BuyingInformation ticketInformationType={TicketInformationTypes.IN_MODAL}>
                                        <p className={"mb-0"}><TicketNumberView isTotalPrice={true} attributeName={"Total Price: "} attributeValue={100} /></p>
                                    </BuyingInformation>
                                    <TicketIncremental/>
                                </div>
                            </div>

                            <div className={"child my-2 mx-3"}>
                                <button className={"btn btn-primary"}>Checkout</button>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}


{/*<div className={"flex-grow-1"}/>*/
}