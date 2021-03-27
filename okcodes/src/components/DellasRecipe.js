import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import dellasrecipe from "../img/dellasrecipe.png"


function DellasRecipe() {
  return (
    <StyledRecipe>
      <div className="work_description">
       <h1>Dellasrecipe</h1>
       <h4>A food website for people to order food and read about food recipes.</h4>
       <p>Dellasrecipe was built for a friend who loves cooking and also makes videos about her recipes on the gram.<br/><br/>
        We decided to increase the audience by creating a single-page website where her users can make a food subscription.<br /><br/>
        I used HTML/CSS to create the page while taking advantage of Javascript for the DOM manipulation. I used GSAP which is an animation Library to create animations across the website. With the help of scroll-magic, i was able to execute a function fired by scroll points instead of using jquery. its a continual project because there is much more to be added to it.
        </p>
       <button>
         <Link className="work_link">View LIVE</Link>
       </button>
      </div>
      <div className="work_image">
        <img src={dellasrecipe} alt="dellasrecipe"/>
      </div>
      
    </StyledRecipe>
  );
}

const StyledRecipe = styled(motion.div)`
   display: flex;
   justify-content:space-between;
   align-items: center;
   margin-right: 2rem;
   margin-bottom: 2rem;
   padding: 3rem 0rem 3rem 2rem;
   width: 100%;
   color: #fafafa;
    .work_description{
      flex: 1;
     h1{
       margin-bottom: 3rem;
     }

      p{
        /* text-align:center; */
        width:100%;
        color: #fafafa;
      }


      button{
        border: 3px solid #000000;
        background-color: #161212;
        &:hover{
        background-color: #006EE6;
        color: white;
        
    }
      .work_link{
      text-decoration: none;
      /* color: #202020; */
      color: #fafafa;
      font-size: 1.65rem;
    }
    &:hover  .work_link{
        color: white;
      }
      }
    }
    .work_image{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
       width: 90%;
       height: 40rem;
       }
 
    }
   
`


export default DellasRecipe;
