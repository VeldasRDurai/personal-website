import React from "react";
import styled from "styled-components";

import Content from "./Content/Content";

const Div = styled.div`
    height:188px;
    width:900px;
    background-color:#00aaa8;
`;

const OutputSpace = ({ run }) => {
    return(
        <Div>
            { run && <Content />}
        </Div>
    );
}

export default OutputSpace;