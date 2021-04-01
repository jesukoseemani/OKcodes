import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"


function Skill() {
  return (
    <Styledskill>
      <h1>My Skills</h1>
      <p>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my time to apply these concepts to real-world scenarios and applications.</p>
      <div className="skills">
        <div className="skills_1">
          <li><span className="circle">o</span>HTML & CSS</li>
          <li><span className="circle">o</span>SASS</li>
          <li><span className="circle">o</span>Styled-Components</li>
        </div>
        <div className="skills_2">
          <li><span className="circle">o</span>JavaScript ES6</li>
          <li><span className="circle">o</span>React</li>
          <li><span className="circle">o</span>Redux</li>
        </div>
        <div className="skills_3">
          <li><span className="circle">o</span>GraphQL</li>
          <li><span className="circle">o</span>Gatsby</li>
          <li><span className="circle">o</span>Material-UI</li>
        </div>
        <div className="skills_4">
          <li><span className="circle">o</span>Git</li>
          <li><span className="circle">o</span>Firebase</li>
          <li><span className="circle">o</span>Figma</li>
        </div>
      </div>
    </Styledskill>
  );
}

const Styledskill = styled(motion.div)`
margin: 3rem 0rem;


p{
width: 55%;
font-size: 1.85rem;
line-height: 150%;
color: black;
text-align: justify;
@media(max-width: 800px){
  width: 75%;
  text-align: left;
       }
@media(max-width: 500px){
  width: 95%;
       }

}

.skills{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  li{
    list-style: none;
    font-size: 1.65rem;
    padding: 2rem;
  }

  .circle{
    color: #006EE6;
    margin-right: 0.8rem;
  }
}
`




export default Skill;
