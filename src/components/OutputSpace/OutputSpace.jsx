import React from "react";
import styled from "styled-components";

import Content from "./Content/Content";

const Div = styled.div`
    height:188px;
    width:900px;
    background-color:#00aaa8;
    // display:${ ({run}) => run ? "flex" : "none" };
    // & > div{
    //     margin:10px;
    //     padding:5px 15px;
    //     font-weight:500;
    //     height:168px;
    //     width:880;
    //     border: 2px solid #0000af;
    //     box-sizing:border-box;
    // }
`;

const OutputSpace = ({ run }) => {
    return( 
        // <Div run={run} >
        //     <Content />
        // </Div>
        <Div>
            {/* { run ? <Content /> : <div></div> } */}
            <Content run={run} />
        </Div>
    );
}

export default OutputSpace;