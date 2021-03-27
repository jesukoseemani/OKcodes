import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import comingSoon from "../img/comingSoon.svg"
import { Link } from "react-router-dom"


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
      
      <div className="coming_button">
        <Link to="/projects">
        <button>Check out my other Projects</button>
        </Link>
      </div>
    </StyledComingsoon>
  );
}

const StyledComingsoon = styled(motion.div)`
margin-top: 15rem;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 100%;
.coming_button{
  margin-top: 2rem;

  button{
  text-transform: uppercase;
  border: 3px solid #ed5565;
  padding: 15px 30px;
  border-radius: 50px;
  color: #ed5565;
  font-size: 1.1rem;
  letter-spacing: 1px;
  background-color: #252627;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 1000;

     &::before{
      content: "";
  background-color: #181818;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  outline: none;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
     }
     &:hover::before {
  transform: scaleY(1);
  transform-origin: right;
      }
  }
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
