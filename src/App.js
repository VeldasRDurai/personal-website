import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GlobalState from "./GlobalState";
import Cursor from "./components/Cursor/Cursor";
import NavBar from "./components/NavBar/NavBar";
import WriteSpace from "./components/WriteSpace/WriteSpace";
import OutputSpace from "./components/OutputSpace/OutputSpace";
import FooterBar from "./components/FooterBar/FooterBar";
import PopUp from "./components/PopUp/PopUp";
import Device from "./components/Device/Device";

const Div = styled.div`
  background-color:#000d;  
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  font-family: 'Kelly Slab', cursive;
  user-select: none;
  cursor: none;
`;

const App = () => {

  const [ run , setRun ] = useState(false);
  const [ xy, setxy ] = useState({ x:0, y:0 });

  const [ switchDevice, setSwitchDevice ] = useState( false );
  useEffect( () => {
    window.outerWidth < 768 ? setSwitchDevice(true) : setSwitchDevice(false) ;
  });
  window.addEventListener( "resize", () => 
    window.outerWidth < 768 ? setSwitchDevice(true) : setSwitchDevice(false) )

  return (
    // <Div>
    <Div onMouseMove={ e => setxy({ x:e.clientX, y:e.clientY}) } >
      { switchDevice ? <Device /> : 
        <>
          <Cursor xy={xy} /> 
          <GlobalState>
              <NavBar setRun={setRun} />
              <WriteSpace />
              <OutputSpace run={run} />
              <FooterBar />
              <PopUp run={run} />
          </GlobalState>
        </>
      }
    </Div>
  );
} 
export default App;
