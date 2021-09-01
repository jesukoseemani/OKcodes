import React from 'react';
import { motion } from "framer-motion"
import styled from "styled-components"
import git from "../img/githubb.PNG"


function GitFind() {
  return (
    <StyledGlueflix>
    <div className="work_description">
     <h1>GitFind</h1>
     <h4>A Github profile finder using GRAPH QL API.</h4>
     <p>
     Here is a beautiful project was done only with Vanilla JavaScript. <br/><br/>
     <br/><br/>
     This is a website to search users on github. i made use of github's GRAPHQL API. i also make use of css keyframes animation to create the landing page. i was able to switch between pages using just one html file while taking advantage of DOM Manipulation. i made sure the website is totally dynamic while closely looking like the main github profile page.
      </p>
     <button>
       <a className="work_link" href="https://git-hub-profile-finder.netlify.app">View LIVE</a>
     </button>
    </div>
    <div className="work_image">
      <img src={git} alt="git"/>
    </div>
    
  </StyledGlueflix>
  );
}

const StyledGlueflix = styled(motion.div)`
 display: flex;
   justify-content:space-between;
   align-items: center;
   margin-right: 2rem;
   margin-bottom: 2rem;
   padding: 3rem 0rem 3rem 2rem;
   width: 100%;
   color: #fafafa;
   height: 100%;
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
        border: 1px solid #f3f3f3;
        background-color: #211b2c;
        border-radius: 3rem;
        &:hover{
        background-color: #7868E6;
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
       object-fit: contain;
       }
 
    }
`

export default GitFind;
