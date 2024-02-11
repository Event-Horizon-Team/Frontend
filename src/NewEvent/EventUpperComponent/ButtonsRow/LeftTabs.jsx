import React from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function LeftTabs({ eventTabIndex, setEventTabIndex }) {

    const handleChange = (event, newValue) => {
        setEventTabIndex(newValue);
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
                </Tabs>
            </Box>
        </div>
    );
}
