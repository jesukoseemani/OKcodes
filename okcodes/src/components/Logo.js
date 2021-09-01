import React from 'react';
import styled from "styled-components"
import{ motion } from "framer-motion"
import logo from "../img/logo.svg"
import { useHistory } from "react-router-dom"
import { photoAnim } from "../animation"
function Logo() {
  const history = useHistory();
  const homeHandler = () => {
      history.push("/")
  }


  return (
    <Styledlogo>
    
    <motion.img   
      exit="exit"
      variants={photoAnim}
      initial="hidden"
      animate="show" 
      src={logo} 
      alt="logo-dev" 
      onClick={homeHandler} />

      
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
  cursor: pointer;
}
`


export default Logo;
