import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Project from "./Project"
import Calt from "../img/calt.PNG"
import cloudfair from "../img/cloudfair.PNG"
import discordHTML from "../img/discord-clone.PNG"
import fotospirit from "../img/fotospirit.PNG"
import githubfinder from "../img/githubfinder.PNG"
import gluewebsite from "../img/gluewebsite.PNG"
import kudiwatch from "../img/kudiwatch.PNG"
import mathematicsWEB from "../img/mathematics website.PNG"
import mathematicsgame from "../img/maths game app.PNG"
import netflixClone from "../img/netflix clone.PNG"
import outdoors from "../img/outdoors.PNG"
import Picto from "../img/picto.PNG"
import shoppies from "../img/shoppies.PNG"
import tourist from "../img/tourist website.PNG"

function Projects() {
  return (
    <StyledProjects>
      <Project img={fotospirit} title="FOTOSPIRIT" description="This is a website for a photography company built in react" link="https://fotospirit.netlify.app" />
      <Project img={outdoors} title="OUTDOORS" description="This is a tourist website built using HTML&CSS" link="https://flamboyant-perlman-b8cd62.netlify.app" />
      <Project img={netflixClone} title="NETFLIX-CLONE" description="This is a clone homepage of Netflix" link="https://netflixclonen.netlify.app"  />
    </StyledProjects>
  );
}

const StyledProjects =  styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: 350px;
  grid-column-gap: 2rem;
  margin-top: 5rem;
  padding: 0rem 5rem;
  transition: all 100ms;    
`

export default Projects;
