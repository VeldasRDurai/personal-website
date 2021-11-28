import React from "react";
import styled, { keyframes } from "styled-components";

const vibration = keyframes`
    0%{ top:0px; left:0px; }
    29%{ top:0px; left:0px; }
    30%{ top:30px; left:0px; }
    59%{ top:30px; left:0px; }
    60%{ top:30px; left:30px; }
    89%{ top:30px; left:30px; }
    90%{ top:-30px; left:30px; }
`

const Div = styled.div`
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-size: 10px;
    opacity: 0.7;
    /* color: black; */
    animation: ${vibration} .2s 150 both alternate-reverse;
    /* animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55) ; */
`

const OverLay = ({ printed}) => {

    return <Div >{ printed }</Div>

}

export default OverLay;