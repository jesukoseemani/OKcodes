import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Intro from "../components/Intro"
import Fullprofile from "../components/Fullprofile"
import Skill from "../components/Skill"
import Works from "../components/Works"
import ComingSoon from "../components/ComingSoon"
import Footer from "../components/Footer"

function Home() {
  return (
    <Styledhome>
      <Intro />
      <Fullprofile />
      <Skill />
      <Works />
      <ComingSoon />
      <Footer />
    </Styledhome>
  );
}

const Styledhome = styled(motion.div)`
width: 100%;
padding: 0rem 5rem;
`


export default Home;
