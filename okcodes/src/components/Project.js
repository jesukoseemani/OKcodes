import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import {fade2} from "../animation"


function Project({img, title, description, link}) {
  return (
    <StyledProject variants={fade2}>
      <div className="project_image">
      <a href={link}>
      <img src={img} alt="project screenshots"/>
      </a>
      </div>
      <div className="project_description">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} className="project_link">VIEW PROJECT <span>&#8619;</span> </a>
      </div>
      
    </StyledProject>
  );
}

const StyledProject =  styled(motion.div)`
width: 100%;
transition: all 200ms;
cursor: pointer;

&:hover .project_image img{
   transform: scale(1.05) 
}

&:hover .project_description .project_link{
  border-bottom: 2.5px solid #006EE6;
}

span{
  font-size: 3rem;
}

.project_image{
  width:100%;
  img{
    width:100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
    transform: scale(1);
  }
}
.project_description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  h1{
      font-size: 3.5rem;
    
  }
  p{
    font-size:2rem;
    width: 95%;
    padding-top: 1.2rem;
  }
  .project_link{
    color: #000000;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }
}

`

export default Project;
