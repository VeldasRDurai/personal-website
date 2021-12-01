import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { WriteContent } from "../../../GlobalState";
// import keyVoice from "./keyVoice.mp3";

const Div = styled.div`
    margin:10px;
    padding-top:5px;
    font-weight:500;
    height:267px;
    border: 4px double white;
    box-sizing:border-box;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    & > div {
        padding:0 8px;
    }
    >:nth-child(1){ 
        color:#0000a9;
        background-color:#00aaa8;
    }
    >:nth-child(2){
        color:#55fd55; 
    }
    >:nth-child(3){
        display:flex;
        >:nth-child(1){ color:white; }
        >:nth-child(2){ color:#55fd55; }
        >:nth-child(3){ color:yellow; font-family:serif; }
    }
    >:nth-child(4){
        color:white;
    }
    >:nth-child(5){
        display:flex;
        >:nth-child(1){ color:white;  }
        >:nth-child(2){ color:#55fd55; font-family:monospace; font-size:16px;}
        >:nth-child(3){ color:yellow; }
    }
    >:nth-child(4),>:nth-child(5){ padding-left :30px; }
    >:nth-child(6){ color:yellow; font-family:serif; }
`;

const Content = () => {


    const { input } = useContext(WriteContent);
    const [ printed , setPrinted ] = useState("");
    useEffect( () => {
        if( input.length > printed.length ){
            let interval = window.setInterval( () => {
                setPrinted( input.slice(0,printed.length+1) );
            },100);
            return () => {
                clearInterval(interval);
            }
        } else {    
            return () => {
                setPrinted("")
            }
        }        
    } , [ printed , input ] );

    return(
        <Div>
            <div> {"#include <iostream>"} </div>
            <div> {"using namespace std;"} </div>
            <div> 
                <div>{"int"}&nbsp;</div> 
                <div>{"main"}</div> 
                <div>{"( ) {"}</div> 
            </div>
            <div> { `cout << ${ printed } ;` } </div>
            <div> 
                <div>{"return"}&nbsp;</div> 
                <div>{"0"}</div>
                <div>{";"}</div>
            </div>
            <div> {"}"} </div>

            {/* <div>{ "#include <iostream>" } </div>
            <div>{ "#include <fstream>" } </div>
            <div>{ "using namespace std;" } </div>

            <div>{ "int main()" } </div>
            <div>{ "{" } </div>
            <div>
                <div>{"char strBuffer[100];"}</div>
                <div>{`ifstream inputFile("${printed}");`}</div>

                <div>{"if (!inputFile) {"}</div>
                <div>
                    <div>{'cout << "File opening failed.\n";'}</div>
                    <div>{'return 1;'}</div>
                </div>
                <div>{"}"}</div>

                <div>{"while (inputFile) {"}</div>
                <div>
                    <div>{"inputFile.getline(strBuffer, 100);"}</div>
                    <div>{"cout << strBuffer << endl;"}</div>
                </div>
                <div>{"}"}</div>

                <div>{"inputFile.close();"}</div>

                <div>{"return 0;"}</div>
            </div>
            <div>{"}"}</div> */}
        </Div>
    );
}

export default Content;
