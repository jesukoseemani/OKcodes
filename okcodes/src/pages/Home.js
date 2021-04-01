import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Intro from "../components/Intro"
import Fullprofile from "../components/Fullprofile"
import Skill from "../components/Skill"
import Works from "../components/Works"
import ComingSoon from "../components/ComingSoon"
import {pageAnimation} from "../animation"


function Home() {
  return (
    <Styledhome
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show">
      <Intro />
      <Fullprofile />
      <Skill />
      <Works />
      <ComingSoon />
    </Styledhome>
  );
}

const Styledhome = styled(motion.div)`
width: 100%;
max-width: 140rem;
padding: 0rem 5rem;
margin: 0 auto;
`


export default Home;
