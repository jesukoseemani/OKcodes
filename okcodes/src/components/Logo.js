import React from 'react';
import styled from "styled-components"
import{ motion } from "framer-motion"
import logo from "../img/logo.svg"

function Logo() {
  return (
    <Styledlogo>
    
    <img src={logo} alt="logo-dev" />
      
    </Styledlogo>
  );
}

const Styledlogo = styled(motion.div)`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 1rem;
img{
  width: 8rem;
  height: 8rem;
}
`


export default Logo;
