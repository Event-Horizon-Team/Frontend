import React, {useEffect} from 'react';

import './AboutPage.css'
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DescriptionIcon from '@mui/icons-material/Description';
import TodayIcon from '@mui/icons-material/Today';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function AboutPage() {

    return (
        <div className={"p-3 background-white about-rounded-border"}>
            <h5 className={"fw-bold"}>Details</h5>
            <div className={"d-flex"}>
                <PersonIcon/>
                <p className={"ms-1"}>Event by <a href={"#"}>Michael Monir</a></p>
            </div>
            <div className={"d-flex"}>
                <FmdGoodIcon/>
                <p className={"ms-1"}>Alexandria, Egypt</p>
            </div>
            <div className={"d-flex"}>
                <LocalActivityIcon/>
                <p className={"ms-1"}>Category: sexx</p>
            </div>
            <div className={"d-flex"}>
                <TodayIcon/>
                <p className={"ms-1"}>Date: 5-6-2024</p>
            </div>
            <div className={"d-flex"}>
                <DescriptionIcon/>
                <p className={"ms-1"}>Description: Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. A consequuntur ea error harum, id laudantium minus modi quisquam
                    recusandae soluta! Dignissimos doloremque laboriosam magnam optio rerum tenetur. Dolorem quasi,
                    ullam.</p>
            </div>
        </div>
    );
}