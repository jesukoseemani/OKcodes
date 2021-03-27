import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import GmailTabsStyle from "./GmailTabsStyle"



function Works() {
  return (
    <StyledWork>
      <h1>What I've been working on</h1>
      <p>i like to stay updated and busy with projects to enhance my skill and knowledge. Take a close look at some of the projects i have dedicated my time to.</p>

      <GmailTabsStyle />

    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
margin: 7rem 0rem;
   p{
    width: 55%;
    font-size: 1.85rem;
    line-height: 150%;
    color: black;
    text-align: justify;
   }
`

export default Works;
