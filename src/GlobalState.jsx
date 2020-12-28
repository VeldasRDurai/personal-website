import React, { useReducer } from "react";

export const WriteContent = React.createContext();
export const DispatchWriterContent = React.createContext();

const reduceWriteContent = ( writeContent , action ) => {
    switch(action.type){
        case "ABOUT ME":
            return {
                input  : "Print About me",
                output : "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            } ;
        case "DETAILS" :
            return {
                input  : "Print Details",
                output : "Name: Veldas R Durai \nAge: 20 years\nLocation:'Thripunithura, India, Earth",
            } ;
        case "EDUCATION":
            return {
                input  : "Print Education",
                output : "education......",
            } ;
        default :
            return writeContent ;
    }
}

const GlobalState = ({ children }) => {

    const [ writeContent , dispatchWriteContent ] = useReducer( reduceWriteContent , {
        input : "Hello World" ,
        output : "This is me. Veldas R Durai :)"
    } );
    return (
        <WriteContent.Provider value={writeContent} >
        <DispatchWriterContent.Provider value={dispatchWriteContent} >
            { children }
        </DispatchWriterContent.Provider>
        </WriteContent.Provider>
    );
}

export default GlobalState;