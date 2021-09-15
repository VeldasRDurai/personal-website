import React, { useReducer } from "react";

export const WriteContent = React.createContext();
export const DispatchWriterContent = React.createContext();

const reduceWriteContent = ( writeContent , action ) => {
    switch(action.type){
        case "ABOUT ME":
            return {
                input  : "Print About me",
                output : "I am an allround web developer. I am a programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            } ;
        case "DETAILS" :
            return {
                input  : "Print Details",
                output : "Name: Veldas R Durai \nAge: 20 years(@2020) \nLocation:'Thripunithura, India, Earth",
            } ;
        case "EDUCATION":
            return {
                input  : "Print Education",
                output : "KERALA TECHNIACAL UNIVERSITY - GOVERNMENT ENGINEERING COLLEGE : B-TECH COMPUTER SCIENCE AND ENGINEERING(2018-22) \nHIGHER SECONDARY : ST.IGNATIUS HSS KANJIRAMATTAM(2018) \nHIGH SCHOOL VHSS IRIMPANAM (2016)",
            } ;
        case "CAREERS" :
            return {
                input  : "Print careers",
                output : "Determined budding engineer set out to kick start career by bringing the best out my skill and improve value everywhere I can. Quick learner and ready to adapt to any challenges",
            } ;
        case "SKILL":
            return {
                input  : "Print skill",
                output : "*Basic programming knowledge in languages like C , Python \n* Web development skills such as HTML, JavaScript, CSS \n*Basic knowledge about front end and back end programming with React js and Node js \n*Content development ",
            } ;
        case "LANGUAGE" :
            return {
                input  : "Print language",
                output : "*English *Malayalam *Tamil *Hindi",
            } ;
        // case "TOOLS":
        //     return {
        //         input  : "Print tools",
        //         output : "",
        //     } ;
        case "LINKS" :
            return {
                input  : "Print links",
                output : " Linked In : https://www.linkedin.com/in/veldas-r-durai \nGitHub : https://github.com/VeldasRDurai/",
            } ;
        case "ADDRESS":
            return {
                input  : "Print address",
                output : "Karaveetil(H), Chitrapuzha, Thripunithura, Eranakulam, India",
            } ;
        case "CONTACT NO":
            return {
                input  : "Print contact no",
                output : "(+91) 9745715512",
            } ;
        case "SOCIAL ID":
            return {
                input  : "Print social id",
                output : "None",
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