import React from "react";
import styled from "styled-components";

import NavElements from "./NavElements";

const Div = styled.div`
    height:25px;
    width:900px;
    font-weight:600;
    background-color:#aaaaaa;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    span{
        color:#af0000;
      }
`;

const NavBar = ({ setRun }) => {
    
    const DetailsNavBar = [
        { value : "≡" ,          dropValues : [] },
        { value : "Profile" ,    dropValues : [ "ABOUT ME" , "DETAILS" ] },
        { value : "Experience" , dropValues : [ "EDUCATION" , "CAREERS"] },
        { value : "Abilities" ,  dropValues : [ "SKILL" , "LANGUAGE" , "TOOLS" ] },
        { value : "Project" ,    dropValues : [ "LINKS" ] },
        { value : "Contact" ,    dropValues : [ "ADDRESS" , "CONTACT NO" , "SOCIAL ID" ] },
        { value : "Run" ,        dropValues : [] },
    ];
    
    return(
        <Div>
            {
                DetailsNavBar.map( (item,index) => 
                    <NavElements key={index} value={item.value} dropValues={item.dropValues} setRun={setRun} />)
            }
        </Div>
    );
}

export default NavBar;