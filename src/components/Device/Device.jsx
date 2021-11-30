import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import OverLay from "./OverLay/OverLay";
import PopUp from "./PopUp/PopUp"

const blinker = keyframes`
    0%{ background-color:#0000af; }
    79%{ background-color:#0000af; }
    80%{ background-color:#f00; }
    /* 95%{ background-color:#0000af; } */
`;

const Div = styled.div`
    height: 100vh;
    width:100vw;
    /* display:flex; */
    display :${ ({stop}) => stop ? 'none' : 'flex' };
    /* justify-content: center;
    align-items: center; */
    background-color: #0000af;
    color: white;
    font-size: .5rem;
    font-family: 'Press Start 2P', cursive;
    /* line-height :10px; */
    animation: ${blinker} 1s infinite both alternate-reverse;

`;

const Device = ({ stop }) => {

    
    const [ input, setInput] = useState("");
    const [ printed , setPrinted ] = useState("");
    const [ stop, setStop ] = useState(false);

    useEffect( () => { 
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then( res => res.json() )
            .then( data => {;
                setPrinted( JSON.stringify(data).slice(0,1000) );
                setInput(JSON.stringify(data))
                // console.log( JSON.stringify(data) );
            });
    },[]);
    
    let interval = window.setInterval( () => {
        // setStop(true);
        window.confirm('Version 1.0\nCompiler VeRsion Error\nThe device is not suppoRting the complieR veRsion we have. BetteR to switch to anotheR device. PRefeRed to use a laptop.youR system in in dangeR\nCLOSE THE TAB IMMEDIATELY\n\nCopyright (C) 2020 by\nVeldas R Durai Inc.');
        clearInterval(interval);
    },10000);

    useEffect( () => {
        if( input.length > printed.length ){
            let interval = window.setInterval( () => {
                setPrinted( input.slice(0,printed.length+1) );
            },10);
            return () => {
                clearInterval(interval);
            }
        // } else {    
        //     return () => {
        //         setPrinted("")
        //     }
        }        
    } , [ printed , input ] );
    return <Div >
        <OverLay printed={ printed } />
         { printed } 
         {/* { stop && <PopUp /> } */}
        </Div>;
}

export default Device;