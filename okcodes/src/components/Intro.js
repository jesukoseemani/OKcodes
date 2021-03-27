import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import{ motion } from "framer-motion"
import linkedin from "../img/linkedin.svg"
import twitter from "../img/twitter.svg"
import github from "../img/github.svg"
// import Profile from "../img/imagekosh.jpeg"
import Profile from "../img/kosh.jpg"
function Intro() {
  return (
    <Styledintro>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1048 602"><path d="M604.778359,226.657651 C863.936914,176.425829 1070.01666,251.491546 1187.77836,397.157651 C1305.54006,542.823755 1223.39646,735.391142 1064.77836,795.657651 C906.160258,855.924159 801.848376,741.566806 626.778359,709.157651 C451.708342,676.748495 175.487603,804.707808 197.778359,635.157651 C220.069115,465.607493 345.619804,276.889472 604.778359,226.657651 Z" transform="translate(-196 -211)"/></svg>
      <Introcontainer>
        <div className="intro_message">
        <img src={Profile} alt="profile"/>
        </div>
        <div className="intro_content">
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
        </div>
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
   
   .intro_message{
    flex: 1;
    
     img{
       height: 29rem;
       width: 27rem;
       object-fit: cover;
       border-radius: 1rem;
       box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.6);
     }
   }
   .intro_content{
      flex: 1;
      h2{
        font-size: 3rem;
        text-transform: uppercase;

       
      }
      p{
        font-size: 2rem;
        color: #1a1818;
      }
     .social{
       width: 50%;
       display: flex;
       justify-content: space-between;
       align-items: center;
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
       }
     }
   }
`





export default Intro;
