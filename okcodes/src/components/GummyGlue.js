import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import styled from "styled-components"
import gummyglue from "../img/gummyglue.PNG"


function GummyGlue() {
  return (
    <StyledGummy>
      <div className="work_description">
       <h1>GummyGlue</h1>
       <h4>A Simple Music Player.</h4>
       <p>
        A personal music web app for my girlfriend (GLUE) and me (GUMMY) which we also share across to close friends and family.<br/><br/>
        It consists of Fifty (50) best songs and updating it every Sunday evening.<br/><br/>
        This was my first app with React using create-react-app. I use all the advantages of react hook from useRef, useEffect, useState. The data is manually created from a free music website. I worked with framer-motion which is a production-ready animation Library for React.<br/><br/>
        It was quite frustrating to get this player working until I found out an easy way which is to use Async and Await. This part has helped me with understanding the concept of asynchronous Javascript.

        </p>
       <button>
         <Link className="work_link">View LIVE</Link>
       </button>
      </div>
      <div className="work_image">
        <img src={gummyglue} alt="gummyglue"/>
      </div>
      
    </StyledGummy>
  );
}
const StyledGummy = styled(motion.div)`
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
       color: #000000;
     }
     h4{
      color: #000000; 
     }

      p{
        /* text-align:center; */
        width:100%;
        color: #000000;
      }


      button{
        border: 3px solid #000000;
        background-color: #161212;
        &:hover{
        background-color: #eeb5ff;
        color: white;
        border: 3px solid #161212;
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



export default GummyGlue;
