import React , { useState , useEffect , useContext } from "react";
import styled from "styled-components";

import { WriteContent } from "../../../GlobalState";

const Div = styled.div`
    margin:10px;
    padding:5px 15px;
    font-weight:500;
    height:168px;
    border: 2px solid #0000af;
    box-sizing:border-box;
`;

const Content = () => {

    const { output }  = useContext(WriteContent);
    const [ printed , setPrinted ] = useState("");
    useEffect( () => {
        if( output.length > printed.length ){
            let interval = window.setInterval( () => {
                setPrinted( output.slice(0,printed.length+1) );
            },10);
            return () => {
                clearInterval(interval);
            }
        } else {    
            return () => {
                setPrinted("")
            }
        }        
    } , [ printed , output ] );

    return(
        <Div>
            {printed.split('\n').map(str => <div>{str}</div>)}
        </Div>
    );
}

export default Content;