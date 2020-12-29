import React , { useState , useEffect , useContext , useRef } from "react";
import styled from "styled-components";

import { WriteContent } from "../../../GlobalState";

const Div = styled.div`
    margin:10px;
    padding: 5px 15px;
    font-weight:500; 
    height:168px;
    width:880px;
    border: 2px solid #0000af;
    box-sizing:border-box;
    overflow:auto;

`;

const Content = () => {

    const { output }  = useContext(WriteContent);
    const [ printed , setPrinted ] = useState("");
    const lastOutput  = useRef("");
    const refDiv = useRef(); 

    useEffect( () => {
        if( output.length > printed.length ){
            let interval = window.setInterval( () => {
                refDiv.current.scrollBy( 0 , refDiv.current.scrollHeight-168);
                setPrinted( output.slice(0,printed.length+1) );
            },10);
            return () => {
                clearInterval(interval);
            }
        }      
    } , [ printed , output ] );
    useEffect( () => {
        return () => {
            lastOutput.current = lastOutput.current + ( lastOutput.current==="" ? "" : "\n"  ) + output ;
            setPrinted("") ;
        } 
    } , [ output ] );

    return(
        <Div ref={refDiv} >
                { 
                    lastOutput.current !== "" &&
                    lastOutput.current.split('\n').map( ( item , index ) => <div key={index} >
                        <div style={{ color:"white" }}>{ new Date().toLocaleString() + " : " }</div>
                        { item }
                    </div>)
                }
                { 
                    printed.split('\n').map( ( item , index ) => <div key={index} >
                        <div style={{ color:"white" }}>{ new Date().toLocaleString() + " : " }</div>
                        { item }
                    </div>)
                }
        </Div>
    );
}

export default Content;