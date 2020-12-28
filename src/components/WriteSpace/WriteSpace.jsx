import React from "react";
import styled from "styled-components";

import Content from "./Content/Content";
import Heading from "./Heading/Heading"; 

const Div = styled.div`
    position:relative;
    height:287px;
    width:900px;
    background-color:rgb(0,0,175);
`;

const WriteSpace = () => {
    return(
        <Div>
            <Heading />
            <Content />
        </Div>
    );
}

export default WriteSpace;