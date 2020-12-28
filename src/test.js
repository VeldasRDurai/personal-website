import React from "react";
import styled from "styled-components";

const Div = styled.div`   
  @font-face {
    font-family: 'MyWebFont';
    src: url('../font/VeraMono.ttf') format('truetype');
  }
  font-family:'MyWebFont';

  background-color:#000d;  
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  >:nth-child(1){
    position:relative;
    height:250px;
    width:720px;
    background-color:rgb(0,0,175);
    >:nth-child(1){
      height:20px;
      font-weight:600;
      background-color:rgb(175,168,175);
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      span{
        color:rgb(175,14,14);
      }
      & > div{      
        padding:0px 10px;
        cursor:pointer;
        :hover{
          background-color:#00a800;
        }
      }
    }
    >:nth-child(2){
      height:210px;
      margin:10px;
      border: 4px double white;
      box-sizing:border-box;
    }
    >:nth-child(3){
      color:white;
      background-color:rgb(0,0,175);
      position:absolute;
      top:20px;
      padding:0px 5px;
      left:40%;
    }
  }
  >:nth-child(2){
    height:150px;
    width:720px;
    background-color:#00a8af;
  }
`;

function App() {
  return (
    <Div>
      <div>
        <div>

          <div> <span>≡</span></div>
          <div> <span>P</span>rofile</div>
          <div> <span>E</span>xperience</div>
          <div> <span>A</span>bilities</div>
          <div> <span>P</span>rojects</div>
          <div> <span>C</span>ontant</div>

        </div>
        <div>

        </div>
        <div>
            Veldas_R_Durai.cpp
        </div>
      </div>
      <div>
        PRESS START 2P
      </div>
    </Div>
  );
} 
export default App;

import React from "react";
import styled from "styled-components";

const Div = styled.div`

`;

const NavBar = () => {
    return(
        <div>

        </div>
    );
}

export default NavBar;
