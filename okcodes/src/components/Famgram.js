import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import famgram from "../img/famgram12.PNG"

function Famgram() {
  return (
    <StyledRecipe>
    <div className="work_description">
     <h1>FamGram</h1>
     <h4>This is a social media webapp where individual meet to share pictures with their loved ones</h4>
     <p>I learned a lot from working on this website. It done much closely to instagram. its more like a personal app.<br/><br/>
      I used CRA to create the app while taking advantage of new concepts of Javascript. I used firebase for the backend where i could store images, user data and all for a swift funtionality. i made use of a simple layout with material ui guideline to create the interface. i find myself using most of the hooks react provides like useRef, useParams, useEffect,useState and some more...
      </p>
     <button>
       <a className="work_link" href="https://famgram-e603c.web.app">View LIVE</a>
     </button>
    </div>
    <div className="work_image">
      <img src={famgram} alt="famgram"/>
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
       object-fit: contain;
       }
 
    }
   
`


export default Famgram;
