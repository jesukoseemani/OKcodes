import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import GmailTabsStyle from "./GmailTabsStyle"
import ExchangeTabs from "./ExchangeTabs"




function Works() {
  return (
    <StyledWork>
      <h1>What I've been working on</h1>
      <p classname="p">i like to stay updated and busy with projects to enhance my skill and knowledge. Take a close look at some of the projects i have dedicated my time to.</p>

      <GmailTabsStyle />
      <ExchangeTabs />

    

    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
margin: 7rem 0rem 0rem 0rem;
.p{
    width: 80%;
    font-size: 1.85rem;
    line-height: 150%;
    color: black;
    text-align: justify;
@media(max-width: 800px){
  width: 75%;
  text-align: left;
       }
@media(max-width: 500px){
  width: 95%;
       }
   }
.coming_button{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
  text-transform: uppercase;
  border: 3px solid #006EE6;
  padding: 15px 30px;
  border-radius: 50px;
  color: #006EE6;
  font-size: 1.1rem;
  letter-spacing: 1px;
  background-color: #fafafa;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 1000;
     &:hover{
      color: #fafafa;
     }

     &::before{
      content: "";
  background-color: #006EE6;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  outline: none;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
     }
     &:hover::before {
  transform: scaleY(1);
  transform-origin: right;
  
      }
  }
  }
   p{
    width: 55%;
    font-size: 1.85rem;
    line-height: 150%;
    color: black;
    text-align: justify;
@media(max-width: 800px){
  width: 75%;
  text-align: left;
       }
@media(max-width: 500px){
  width: 95%;
       }
   }
`

export default Works;
