import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import comingSoon from "../img/Averti.jpg"


function ComingSoon() {
  return (
    <StyledComingsoon>
      <div className="coming_image">
      <img src={comingSoon} alt="coming soon" />
      </div>
      
      <div className="coming_description">
      <h1 style={{ WebkitBackgroundClip: 'text' }}>AVERTI INC.</h1>
      <p>An e-commerce application for Averti Clothing Company</p>
      <h4>COMING SOON</h4>
      </div>
      
     
    </StyledComingsoon>
  );
}

const StyledComingsoon = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 100%;
margin-top: 3rem;
@media(max-width: 900px){
  margin-top: 1rem;
}
     h4{
       font-family: 'Mulish', cursive;
       font-size: 2.2rem;
       font-weight: bold;
     }
    .coming_image{
      display: flex;
      width: 100%;
      margin: 0 auto;
            img{
              width: 90rem;
              height: 50rem;
              object-fit: cover;
              margin: 0 auto;
              @media(max-width:800px){
                width: 100%;
              height: 50rem;
              object-fit: contain;
              }
            }
    }

    .coming_description{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align: left;
      margin-top: 3rem;
      h1{
        font-size: 5rem;
        /* text-fill-color: transparent; */
        /* background-clip: text; */
        -webkit-text-fill-color: transparent;
        background: -webkit-linear-gradient(to right, #f7ff00, #db36a4); 
        background: linear-gradient(to right, #f7ff00, #db36a4);
        color: black;
      }
      p{
        font-size: 1.8rem;
      }
    }
`


export default ComingSoon;
