import React from 'react';
import styled from "styled-components";

function Maincontent() {
  return (
    <Wrap>
       <h3>
         <span>W</span>
         <span style={{color: "red"}}>E</span>
         <span style={{color: "green"}}>B</span>
         <span style={{color: "black"}}>-</span>
         <span style={{color: "orange"}}>A</span>
         <span style={{color: "brown"}}>P</span>
         <span>P</span>

        </h3>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    h3{
      font-size:2rem;
      color: black;
    }
  `

export default Maincontent;
