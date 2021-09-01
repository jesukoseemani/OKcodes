import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Intro from "../components/Intro"
import Fullprofile from "../components/Fullprofile"
import Skill from "../components/Skill"
import Works from "../components/Works"
import ConnectChart from "../components/ConnectChart"
import ComingSoon from "../components/ComingSoon"
import {pageAnimation} from "../animation"
import ScrollTop from "../components/ScrollTop";


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
      <ConnectChart />
      <ComingSoon />
      <ScrollTop />
    </Styledhome>
  );
}

const Styledhome = styled(motion.div)`
width: 100%;
max-width: 140rem;
padding: 0rem 5rem;
margin: 0 auto;
@media(max-width: 550px){
  padding: 0rem 2rem;
       }
`


export default Home;
