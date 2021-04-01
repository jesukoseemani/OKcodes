import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import{ motion } from "framer-motion"
import linkedin from "../img/linkedin.svg"
import twitter from "../img/twitter.svg"
import github from "../img/github.svg"
// import Profile from "../img/imagekosh.jpeg"
import Profile from "../img/kosh.jpg"
import {fade, photo1Anim} from "../animation"
function Intro() {
  return (
    <Styledintro>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1048 602"><path d="M604.778359,226.657651 C863.936914,176.425829 1070.01666,251.491546 1187.77836,397.157651 C1305.54006,542.823755 1223.39646,735.391142 1064.77836,795.657651 C906.160258,855.924159 801.848376,741.566806 626.778359,709.157651 C451.708342,676.748495 175.487603,804.707808 197.778359,635.157651 C220.069115,465.607493 345.619804,276.889472 604.778359,226.657651 Z" transform="translate(-196 -211)"/></svg>
      <Introcontainer>
        <motion.div variants={photo1Anim} className="intro_message">
        <img src={Profile} alt="profile"/>
        </motion.div>
        <motion.div variants={fade} className="intro_content">
          <h2>Hi, I'm Koseemani.</h2>
          <p>I am Front-End Developer from Nigeria. I like progressive web apps, neural networks and designing user experiences.</p>
          <div className="social">
            <Link className="twitter" to="https://twitter.com/olowokosh">
            <img  src={twitter} alt="twitter" />
            </Link>
            <Link className="linkedin" to="https://www.linkedin.com/in/koseemani/">
            <img src={linkedin} alt="linkedin" />
            </Link>
            <Link className="github"  to="https://github.com/jesukoseemani">
            <img  src={github} alt="github" />
            </Link>
          </div>
        </motion.div>
      </Introcontainer>
      
    </Styledintro>
  );
}

const Styledintro = styled(motion.div)` 
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 80vh;
  display:flex;
   justify-content: center;
   align-items: center;
   position: relative;
  
     @media(max-width: 1200px){
      width: 80%;
        
       }
       @media(max-width: 1050px){
      width: 90%;
        
       }
       @media(max-width: 750px){
        width: 100%;
       }
     
       svg{
         fill: #006EE6;
       }
`
const Introcontainer = styled(motion.div)`
   width: 80%;
   display:flex;
   justify-content: space-between;
   align-items: center;
   position: absolute;
   @media(max-width: 680px){
        width: 100%
       }
   @media(max-width: 550px){
         flex-direction: column;
       }
   .intro_message{
    flex: 1;
    @media(max-width: 680px){
       flex: 0;
       }
    @media(max-width: 550px){
      margin-top: -10rem;
       }
     img{
       height: 29rem;
       width: 27rem;
       object-fit: cover;
       border-radius: 1rem;
       box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.6);
       @media(max-width: 950px){
        height: 25rem;
        width: 23rem;
       }
       @media(max-width: 850px){
        height: 23rem;
        width: 21rem;
       }
       @media(max-width: 680px){
        height: 20rem;
        width: 18rem;
       }
       @media(max-width: 610px){
        height: 18rem;
        width: 16rem;
       }
       @media(max-width: 450px){
        height: 14rem;
        width: 12rem;
       }
       
     }
   }
   .intro_content{
      flex: 1;
      color: #fafafa;
      @media(max-width: 680px){
       margin-left: 1.5rem;
       }
       @media(max-width: 550px){
        display:flex;
        flex-direction: column;
       justify-content: center;
       align-items: center;  
       }
      h2{
        font-size: 3rem;
        text-transform: uppercase;
        @media(max-width: 950px){
          font-size: 2.4rem;
       }
       @media(max-width: 850px){
          font-size: 2.2rem;
       }
       @media(max-width: 580px){
          font-size: 2rem;
       }
       @media(max-width: 450px){
          font-size: 1.7rem;
       }
       
      }
      p{
        font-size: 2rem;
        color: #fafafa;
        @media(max-width: 950px){
          font-size: 1.8rem;
       }
       @media(max-width: 850px){
          font-size: 1.6rem;
       }
       @media(max-width: 580px){
          font-size: 1.4rem;
       }
       @media(max-width: 450px){
          font-size: 1.1rem;
       }
      }
     .social{
       width: 50%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       @media(max-width: 950px){
        width: 70%;
       }
       @media(max-width: 610px){
        width: 100%;
        padding-left: 8rem;
        justify-content: flex-end;
       align-items: flex-end;
       }
       @media(max-width: 550px){
      margin-top: 2rem;
       }
       @media(max-width: 450px){
      margin-top: 0rem;
        width: 50%;
        padding-left: 1rem;
        justify-content: flex-end;
       align-items: flex-end;
       }
       
       .twitter{
        flex: 1;
       }
       .github{
        flex: 1;
        
       }
       .linkedin{
        flex: 1;
       }
       img{
         width: 4rem;
         height: 4rem;
         @media(max-width: 610px){
          width: 2rem;
         height: 2rem;
       
       }
       }
     }
   }
`





export default Intro;
