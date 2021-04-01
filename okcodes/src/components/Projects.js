import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Project from "./Project"
import Calt from "../img/calt.PNG"
import cloudfare from "../img/cloudfair.PNG"
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
import {pageAnimation} from "../animation"

function Projects() {
  return (
    <StyledProjects  
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show">
      <Project img={fotospirit} title="FOTOSPIRIT" description="This is a website for a photography company built in react" link="https://fotospirit.netlify.app" />
      
      <Project img={outdoors} title="OUTDOORS" description="This is a tourist website built using HTML&CSS" link="https://flamboyant-perlman-b8cd62.netlify.app" />
      
      <Project img={netflixClone} title="NETFLIX-CLONE" description="This is a clone homepage of Netflix using HTML&CSS" link="https://netflixclonen.netlify.app"  />

      <Project img={discordHTML} title="DISCORD-CLONE" description="This is a clone homepage of Discord website using svg animations in CSS" link="https://netflixclonen.netlify.app"  />

      <Project img={cloudfare} title="CLOUDFARE" description="This is a clone homepage of Heroku a service provider website using HTML, CSS and VJS" link="https://netflixclonen.netlify.app"  />

      <Project img={gluewebsite} title="GLUE" description="This is an appreciation website i created for my girlfriend using HTML&CSS and GSAP" link="https://netflixclonen.netlify.app"  />

      <Project img={kudiwatch} title="KUDI WATCH" description="This is a Webapp for tracking expenses using Vanilla JavaScript" link="https://netflixclonen.netlify.app"  />

      <Project img={Calt} title="CALT" description="This is a webapp for tracking down calories using Vanilla JavaScript" link="https://netflixclonen.netlify.app"  />

      <Project img={shoppies} title="SHOPPIES" description="This is a movie nomination website using imdb API, Vanilla JavaScript" link="https://netflixclonen.netlify.app"  />
      
      <Project img={githubfinder} title="GITHUB FINDER" description="This is a website i used in learning about api and its function. using the github API" link="https://netflixclonen.netlify.app"  />

      <Project img={Picto} title="PICTO" description="This is a picture fetching website where you can download your favorite picture " link="https://netflixclonen.netlify.app"  />

      <Project img={mathematicsWEB} title="TUTORS" description="This is a desktop-type mathematics learning website" link="https://netflixclonen.netlify.app"  />

      <Project img={mathematicsgame} title="MATHEMATICS GAME" description="This is a desktop-type mathematics learning webapp" link="https://netflixclonen.netlify.app"  />

      <Project img={tourist} title="TOURIST" description="This is a clone homepage of a tourist company using HTML, CSS and VJS" link="https://netflixclonen.netlify.app"  />
    
    
    
    </StyledProjects>
  );
}

const StyledProjects =  styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  margin-top: 5rem;
  padding: 0rem 5rem;
  transition: all 100ms;    
`

export default Projects;
