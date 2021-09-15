// import React, { useReducer } from "react";
import React, { useState } from "react";
import styled from "styled-components";

import GlobalState from "./GlobalState";
import NavBar from "./components/NavBar/NavBar";
import WriteSpace from "./components/WriteSpace/WriteSpace";
import OutputSpace from "./components/OutputSpace/OutputSpace";
import FooterBar from "./components/FooterBar/FooterBar";
import PopUp from "./components/PopUp/PopUp";

// export const WriteContent = React.createContext();
// export const DispatchWriterContent = React.createContext();

// const reduceWriteContent = ( writeContent , action ) => {
//   switch(action.type){
//     case "ABOUT ME":
//       return "This is ABOUT ME" ;
//     case "DETAILS" :
//       return "This is somthing else" ;
//     default :
//       return writeContent ;
//   }
// }

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
  // user-select: none;
`;

const App = () => {

  // const [ writeContent , dispatchWriteContent ] = useReducer( reduceWriteContent , "Nothing" );
  const [ run , setRun ] = useState(false);
  return (
    <Div> 
      {/* <WriteContent.Provider value={writeContent} >
        <DispatchWriterContent.Provider value={dispatchWriteContent} > */}
        <GlobalState>
          <NavBar setRun={setRun} />
          <WriteSpace />
          <OutputSpace run={run} />
          <FooterBar />
          <PopUp run={run} />
        </GlobalState>
        {/* </DispatchWriterContent.Provider>
      </WriteContent.Provider> */}
    </Div>
  );
} 
export default App;
