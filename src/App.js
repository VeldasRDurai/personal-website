import React , { useState } from "react";
import styled from "styled-components";
import veldasImg from "./veldas.jpg";

const Div = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  &>div{width:100%;}
  >:nth-child(1){
    height:15vh;
    background-color:white;
  }
  >:nth-child(2){
    display:flex;
    justify-content:center;
    >:nth-child(1){
      border-radius:10px;
      width:90vw;
      height:60vh;
      object-fit:cover;
      object-position:50% ${({scrolled}) => scrolled < 100 ?  (scrolled)+"%" : "100%" };
    }
  }
`;
// 
function App() {
  const [ scrolled , setScrolled ] = useState(0);
  window.onscroll = () => {
    console.log(document.documentElement.scrollTop);
    setScrolled(document.documentElement.scrollTop);
  };
  return (
    <Div scrolled={scrolled} >
      <div>{"VELDAS R DURAI"}</div>
      <div><img src={veldasImg} alt={"veldas"}/></div>
      {"Hello World"}
      <div style={{height:"1000px",backgroundColor:"brown"}}>qssqsq</div>
    </Div>
  );
} 

export default App;
