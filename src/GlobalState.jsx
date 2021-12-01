import React, { useReducer } from "react";

export const WriteContent = React.createContext();
export const DispatchWriterContent = React.createContext();

const reduceWriteContent = ( writeContent , action ) => {
    switch(action.type){
        case "ABOUT ME":
            return {
                input  : "Print About me",
                output : "ABOUT ME : I am an allround web developer. I am a programmer with good knowledge of full-stack techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            } ;
        case "DETAILS" :
            return {
                input  : "Print Details",
                output : "DETAILS :\nName: Veldas R Durai \nAge: 20 years(@2020) \nLocation:'Thripunithura, India, Earth",
            } ;
        case "EDUCATION":
            return {
                input  : "Print Education",
                output : "EDUCATION : \nKERALA TECHNIACAL UNIVERSITY - GOVERNMENT ENGINEERING COLLEGE : B-TECH COMPUTER SCIENCE AND ENGINEERING(2018-22) \nHIGHER SECONDARY : ST.IGNATIUS HSS KANJIRAMATTAM(2018) \nHIGH SCHOOL : VHSS IRIMPANAM (2016)",
            } ;
        case "CAREERS" :
            return {
                input  : "Print careers",
                output : "CAREER : \nBotx Automations Pvt. Ltd. : Junior Web Developer Inter(Mar21-May21)\nDetermined budding engineer set out to kick start career by bringing the best out my skill and improve value everywhere I can. Quick learner and ready to adapt to any challenges",
            } ;
        case "SKILL":
            return {
                input  : "Print skill",
                output : "SKILL : \nCoding Languages : JavaScript, Python, C\nWeb Development : HTML, CSS\nFrameworks : jQuery, ReactJS, NodeJS, ExpressJS\nDataBase : MongoDB, MySQL",
            } ;
        case "LANGUAGE" :
            return {
                input  : "Print language",
                output : "LANGUAGE : \nEnglish  ****-\nMalayalam ****- \nTamil ***-- \nHindi **---",
            } ;
        case "TOOLS":
            return {
                input  : "Print tools",
                output : "TOOLS : VisualCodeStudio, ChromeDevTools, NodePackageManager(npm), git, Github, Postman etc.",
            } ;
        case "LINKS" :
            return {
                input  : "Print links",
                output : "PROJECTS : \n1.MESSENGER APPLICATION : A community messenger real-time web application that makes use of a Gmail account as users. https://archipelago-messenger.herokuapp.com/ \n2.YOUTUBE TRANSCRIPT DOWNLOADER : A Web application for obtaining all available transcript of a Youtube video using video link. https://transtuber.herokuapp.com/\n 3.NOTE APPLICATION : https://to-do-app-das.herokuapp.com/ \n4.WHATSAPP EXPORTED CHAT VIEWER : A web application to convert whatsapp exported chat content in text format to app user interface form. https://veldasrdurai.github.io/whatsapp-exported-message-viewer/\n react-calculator, tic-tac-toe, snake-game, stone-paper-scissor, url-shortner And many other... \nFor more project, Cheak out my github account. Contact -> Social id -> GitHub",
            } ;
        case "ADDRESS":
            return {
                input  : "Print address",
                output : "ADDRESS : \nKaraveetil(H), Irumpanam(PO), \nChithrapuzha, Thripunithura, Ernakulam,\n Kerala, India, Earth \nPIN : 682309",
            } ;
        case "CONTACT NO":
            return {
                input  : "Print contact no",
                output : "EMAIL : veldasrdurai72@gmail.com \nCELL : +91-9745715512",
            } ;
        case "SOCIAL ID":
            return {
                input  : "Print social id",
                output : "GitHub : https://github.com/veldasrdurai \nLinkedIn : https://www.linkedin.com/in/veldasrdurai/",
            } ;
        default :
            return writeContent ;
    }
}

const GlobalState = ({ children }) => {

    const [ writeContent , dispatchWriteContent ] = useReducer( reduceWriteContent , {
        input : "Hello World" ,
        output : "Hi there... I'm Veldas R Durai :)\n Select the options in above bar."
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