import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    position:absolute;
    top:0;left:0;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 16px;
    color:black;
    & > div{
        height:30%;
        width:90%;
        background-color:#afa8af;
        box-shadow: 25px 25px 0px 0px #000;
        & > div{
            padding:25px;
            margin:5%;
            height:80%;
            border: 12px black solid;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly; 
            align-items:center;
            font-weight:900;
            & > div { 
                text-align:center; 
            }
            >:nth-child(1){
                font-size:50px;
                color:green;
            }
            >:nth-child(2){ color:red; }
            >:nth-child(3) {
                text-align:center;
            }
            >:nth-child(4){    
                padding:10px;
                color:yellow;
                background-color:green;
                box-shadow: 5px 5px 0px 0px #000;
                font-family: inherit;
                cursor:pointer;
                :hover { box-shadow: 4px 4px 0px 0px #000; }
            }
            >:last-child{ color:red; font-size:20px; }
        }
    }
`;

const PopUp = () => {

    return(
        <Div>
            <div> 
                <div>
                    <div> Version 1.0 </div>
                    <div> Compiler VeRsion Error </div>
                    <div> The device is not suppoRting the complieR veRsion we have. BetteR to switch to anotheR device. PRefeRed to use a laptop </div>
                    <button > OK </button>
                    <div> Copyright (C) 2020 by  </div>
                    <div>  Veldas R Durai Inc. </div>
                    <div>
                        <div> CLOSE THE TAB IMMEDIATELY </div>
                        <div> youR system in in dangeR </div>
                    </div>
                </div>
            </div>
        </Div>
    );
}

export default PopUp;