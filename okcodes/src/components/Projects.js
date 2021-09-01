import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import Project from "./Project"
import Calt from "../img/calt.PNG"
import cloudfare from "../img/cloudfair.PNG"
import githubfinder from "../img/githubfinder.PNG"
import kudiwatch from "../img/kudiwatch.PNG"
import netflixClone  from "../img/Netflix-Nigeria-.png"
import Picto from "../img/picto.PNG"
import dellasrecipe from "../img/dellasrecipe.png"
import shoppies from "../img/shoppies.PNG"
import tourist from "../img/tourist website.PNG"
import {pageAnimation} from "../animation"
import ScrollTop from "./ScrollTop";

function Projects() {
  return (
    <StyledProjects  
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show">
      
      <Project img={netflixClone} title="NETFLIX-CLONE" description="This is a clone homepage of Netflix using HTML&CSS" link="https://netflixclonen.netlify.app"  />

      <Project img={dellasrecipe} title="DELLASRECIPE" description="This is a food website using HTML&CSS&GSAP&Javascript" link="https://dellasrecipe.netlify.app"/>

      <Project img={cloudfare} title="CLOUDFARE" description="This is a clone homepage of Heroku a service provider website using HTML, CSS and VJS" link="https://cloudfair.netlify.app"/>

      <Project img={kudiwatch} title="KUDI WATCH" description="This is a Webapp for tracking expenses using Vanilla JavaScript" link="https://kudiwatch.netlify.app"/>

      <Project img={Calt} title="CALT" description="This is a webapp for tracking down calories using Vanilla JavaScript" link="https://calt.netlify.app"/>

      <Project img={shoppies} title="SHOPPIES" description="This is a movie nomination website using imdb API, Vanilla JavaScript" link="https://shoppiesng.netlify.app"/>
      
      <Project img={githubfinder} title="GITHUB FINDER" description="This is a website i used in learning about api and its function. using the github API" link="https://githubhelpfinder.netlify.app"/>

      <Project img={Picto} title="PICTO" description="This is a picture fetching website where you can download your favorite picture " link="https://piccto.netlify.app"/>

      <Project img={tourist} title="TOURIST" description="This is a clone homepage of a tourist company using HTML, CSS and VJS" link="touris.netlify.app"  />
    
    
      <ScrollTop />
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
  @media(max-width: 550px){
  padding: 0rem 2rem;
       }    
`

export default Projects;
