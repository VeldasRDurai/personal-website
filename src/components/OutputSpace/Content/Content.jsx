import React , { useState , useEffect , useContext , useRef } from "react";
import styled from "styled-components";

import { WriteContent } from "../../../GlobalState";

const Div = styled.div`
    margin:10px;
    padding: 5px 15px;
    font-weight:900; 
    height:168px;
    width:880px;
    border: 2px solid #0000af;
    border-right: none;
    box-sizing:border-box;
    overflow-y:scroll;
    font-family:fangsong;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color:#0000af;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0000af;
        box-sizing:border-box;
        border-left: 2px solid #00aaa8;
        border-right: 2px solid #00aaa8;
        border-top: 4px solid #00aaa8;
        border-bottom: 4px solid #00aaa8;
    }
`;

const Content = () => {

    const { output }  = useContext(WriteContent);
    const [ printed , setPrinted ] = useState("");
    const [ lastOutput, setLastOutput ] = useState("");
    const refDiv = useRef(); 
    const [ time, setTime ] = useState( new Date().toLocaleString());

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
            setLastOutput( refDiv.current && refDiv.current.innerText ) ;
            setTime( new Date().toLocaleString() );
            setPrinted("") ;
        } 
    } , [ output ] );

    return(
        <Div ref={refDiv} >
                { 
                    lastOutput !== "" &&
                    lastOutput.split('\n').map( ( item , index ) =>
                        <div key={index} style={ index%2===0 ? { color:"#fffb" }: { color:"#000b" }}>
                            { item }
                        </div>
                    )
                }
                { 
                    printed.split('\n').map( ( item , index ) => <div key={index} >
                        <div style={{ color:"white" }}>{ time  + " : " }</div>
                        { item }
                    </div>)
                }
        </Div>
    );
}

export default Content;