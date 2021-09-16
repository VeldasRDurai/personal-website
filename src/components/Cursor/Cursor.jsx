import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
    0% { background-color:#f000; }
    20% { background-color:#f000; }
    21%{ background-color:#f00f; }
    100%{ background-color:#f00f; }
`;
const Div = styled.div`
    width:8px;
    height:16px;
    position: absolute;
    background-color:red;
    z-index:1;
    animation:${blinking} .5s infinite;
`;

const Cursor = ({ xy }) => {
    const refDiv = useRef()
    useEffect( () => {
        refDiv.current.style.left = (Number(xy.x) + 5) + 'px';
        refDiv.current.style.top  = (Number(xy.y) + 5) + 'px';
    },[xy])
    return <Div ref={refDiv} > </Div> ;
}

export default Cursor;