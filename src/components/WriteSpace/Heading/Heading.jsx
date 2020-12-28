import React, { useContext } from "react";
import styled from "styled-components";

import { WriteContent } from '../../../GlobalState';

const Div = styled.div`
    color:white;
    background-color:rgb(0,0,175);
    position:absolute;
    top:0px;
    padding:0px 5px;
    left:40%;
`;

const Heading = () => {
    const { input } = useContext(WriteContent);
    return(
        <Div>
            {  input === "Hello World" ? "VELDAS_R_DURAI.CPP" : input.slice(6)+".cpp" }
        </Div>
    );
}

export default Heading;
