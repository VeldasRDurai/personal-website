import React from "react";
import styled from "styled-components";

const Div = styled.div`
    height:25px;
    width:900px;
    font-size:18px;
    font-weight:600;
    background-color:#aaaaaa;
    display:flex;
    justify-content:left;
    align-items:stretch;

    & >:nth-child(1) {
        padding: 0 10px;
        border-right:3px solid black;
        span {
            color:#af0000;
        }
    }
    & >:nth-child(2) {
        padding: 0 10px;
    }
`;

const FooterBar = () => {
    return(
        <Div>
            <div> <span>F1</span> help </div>
            <div> Accept the settings in this dialog box </div>
        </Div>
    );
}

export default FooterBar;