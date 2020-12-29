import React , { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { WriteContent } from "../../GlobalState";

const Div = styled.div`
    display:${ ({showPopUp}) => showPopUp ? "flex" : "none!important" };
    position:absolute;
    top:0;left:0;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    & > div{
        height:200px;
        width:350px;
        background-color:#afa8af;
        box-shadow: 10px 10px 0px 0px #000;
        & > div{
            margin:10px;
            height:180px;
            border: 4px white double;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly; 
            align-items:center;
            font-weight:900;
            >:nth-child(1){
                Color:green;
            }
            >:nth-child(2) , >:nth-child(3) {
                font-size:15px;
                Color:black;
            }
            >:nth-child(4) ,>:nth-child(5){    
                padding:0px 15px;
                color:yellow;
                background-color:green;
                box-shadow: 5px 5px 0px 0px #000;
                cursor:pointer;
                :hover { box-shadow: 4px 4px 0px 0px #000; }
            }
        }
    }
`;

const PopUp = () => {
    const { input } = useContext( WriteContent );
    const [ showPopUp , setShowPopUp ] = useState( false );
    const [ dontShowAgain , setDontShowAgain ] = useState(false);
    useEffect( () => {    
        !dontShowAgain && input !== "Hello World" && setShowPopUp(true); 
    } , [ input , dontShowAgain ]);
    return(
        <Div showPopUp={showPopUp} >
            <div> 
                <div>
                    {/* <div> Click Run to See OutPut </div> */}
                    <div> Version 1.0 </div>
                    <div> Copyright (C) 2020 by  </div>
                    <div> Ramesh Exploida , Global Inc. </div>
                    <div onClick={ () => setShowPopUp(false) }>OK</div>
                    <div onClick={ () => { setDontShowAgain(true); setShowPopUp(false); } } > Don't show again </div>
                </div>
            </div>
        </Div>
    );
}

export default PopUp;