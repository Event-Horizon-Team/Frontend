import React from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {usePageSizeAndTabIndex} from "../../EventPage";

export default function LeftTabs({ eventTabIndex, setEventTabIndex }) {

    const { setMiddlePageSize } = usePageSizeAndTabIndex();

    const handleChange = (event, newValue) => {
        setEventTabIndex(newValue);
        if (newValue === 2) setMiddlePageSize(6);
        else setMiddlePageSize(5);
    };

    return (
        <div className={"d-flex justify-content-start"}>
            <Box sx={{ height: '40px' }}> {/* Adjust width and height here */}
                <Tabs
                    value={eventTabIndex}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-flexContainer': {
                            '& .MuiButtonBase-root': {
                                padding: '2px 2px', // Adjust padding here
                                fontSize: '0.75rem' // Adjust font size here
                            }
                        }
                    }}
                >
                    <Tab label="About" value={0}/>
                    <Tab label="Announcements" value={1}/>
                    <Tab label="Tickets" value={2}/>
                </Tabs>
            </Box>
        </div>
    );
}
