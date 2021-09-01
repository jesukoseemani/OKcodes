import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import fotoSpirit from "../img/fotospirit.PNG"



function FotoSpirit() {
  return (
    <StyledRecipe>
      <div className="work_description">
       <h1>FotoSpirit</h1>
       <h4>This is a photography website build for a photo-videography agency</h4>
       <p>This is inspired by a big firm here in my neigborhood. I started off building the interface of the website using figma.<br/><br/>
        I used react to build the webpage, making use of react-router-dom, framer-motion and many more. framer-motion was use to achieve the amimation functionality displayed on the application. 
        </p>
       <button>
         <a className="work_link" href="https://fotospirit.netlify.app">View LIVE</a>
       </button>
      </div>
      <div className="work_image">
        <img src={fotoSpirit} alt="FotoSpirit"/>
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
   color: #000000;
   height: 100%;
    .work_description{
      flex: 1;
     h1{
       margin-bottom: 3rem;
     }

      p{
        /* text-align:center; */
        width:100%;
        color: #000000;
      }


      button{
        border: 1px solid #f3f3f3;
        background-color: #211b2c;
        border-radius: 3rem;
        &:hover{
        background-color: #eeb5ff;
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


export default FotoSpirit;
