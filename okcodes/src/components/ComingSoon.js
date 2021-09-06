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
      <h1>AVERTI INC.</h1>
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
            img{
              width: 100%;
              height: 50rem;
              object-fit: cover;
            }
    }

    .coming_description{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align: left;
      margin-top: 1rem;
      p{
        font-size: 1.8rem;
      }
    }
`


export default ComingSoon;
