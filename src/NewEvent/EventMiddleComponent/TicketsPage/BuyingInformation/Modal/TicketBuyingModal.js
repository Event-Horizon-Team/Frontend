import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TicketIncremental from "./TicketIncremental";
import '../BuyingInformation.css';
import {TicketInformationTypes} from "../TicketInformation/TicketInformationTypes";
import BuyingInformation from "../TicketInformation/BuyingInformation";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // pt: 2,
    // px: 4,
    pb: 3,
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
                <Box sx={{...style, width: 600, height: 300}}>
                    <div className={"container container-fluid bg-primary pb-1 d-flex align-items-center"}>
                        <button className={"modal-close-button text-light fw-bold"} onClick={handleClose}> X </button>
                        <h1 className={"text-light"}>Ticket Buying Transaction</h1>
                    </div>
                    <div className={"m-2 modal-body"}>
                        <h2 className={"display-5 border-bottom border-2 modal-border me-1"}>Ticket Title</h2>
                        <div className={"d-flex justify-content-between align-items-center"}>

                            <div className={"justify-content-start align-items-center"}>
                                <p className={"m-0 p-0 fs-4"}><span
                                    className={"fw-medium text-primary"}>Price:</span> 100 EGP</p>
                                <div className={"d-flex"}>
                                    <p className={"fs-4 me-1"}><span
                                        className={"fw-medium text-primary"}>Price:</span> 100 EGP</p>
                                    <p className={"fs-4 ms-1"}><span
                                        className={"fw-medium text-primary"}>Price:</span> 100 EGP</p>
                                </div>
                            </div>
                            {/*<BuyingInformation ticketInformationType={TicketInformationTypes.IN_MODAL} />*/}
                            {/*<TicketIncremental/>*/}
                        </div>
                        <div className={"d-flex justify-content-end align-items-end my-modal-footer"}>
                            <button className={"btn btn-primary"}>Checkout</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}