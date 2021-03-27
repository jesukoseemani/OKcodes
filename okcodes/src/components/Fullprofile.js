import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"



function Fullprofile() {
  return (
    <Styledfullprofile>
      <div className="Description-1">
        <p>A simple Google search of “how do websites work” is what started everything off.<br/><br/>
        As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application.        
        </p>
      </div>
      <div className="Description-2">
        <p>Through these experiences, I have been able to develop a strong technical aptitude to adapt to new technology and processes. I have been able to dedicate to work following through with every task or duty assigned to me. <br/><br/>
        I love to work with other developer to create a memoriable product, readable in codes and easy to users.
        </p>
      </div>

    </Styledfullprofile>
  );
}

const Styledfullprofile = styled(motion.div)`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 5rem 0rem;
grid-gap: 3rem;

p{
  font-size: 1.85rem;
  line-height: 150%;
  color: black;
  text-align: justify;
}

`

export default Fullprofile;
