import React , { useState } from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

const Div = styled.div`
    font-size:16px;    
    padding:0px 10px;
    cursor:pointer;
    :hover{
        background-color:#00a800;
    }
`;

const NavElement = ({ value , dropValues , setRun }) => {
    const [ showDropdown , setShowDropdown ] = useState(false);

    return(
        <Div onMouseEnter={ () => setShowDropdown(true) } 
            onMouseLeave={ () => setShowDropdown(false) } 
            onClick = { () => value === "Run" && setRun(true) } >

            <span>{ value[0].toUpperCase() }</span>{ value.slice(1).toLowerCase() }
            { showDropdown && (dropValues.length !== 0) && 
                <Dropdown dropValues={dropValues} setShowDropdown={setShowDropdown} setRun={setRun} /> }
        </Div>
    );
}

export default NavElement;