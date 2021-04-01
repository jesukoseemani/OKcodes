import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import {fade2} from "../animation"


function Project({img, title, description, link}) {
  return (
    <StyledProject variants={fade2}>
      <div className="project_image">
      <img src={img} alt="project screenshots"/>
      </div>
      <div className="project_description">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={link} className="project_link">VIEW PROJECT </Link>
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
  border-bottom: 1.5px solid #000000;
}

.project_image{
  width:100%;
  img{
    width:100%;
    height: 200px;
    transform: scale(1) 
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
