import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"
import { useHistory } from "react-router-dom"


function Footer() {
  const history = useHistory();
  const homeHandler = () => {
      history.push("/")
  }


  return (
    <StyledFooter>
      <div className="footer_description">
      <h1>Let's Build Something Together.</h1>
      <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect. <a style={{fontSize:"1.5rem", color:"red", fontStyle:"italics"}} href="https://drive.google.com/file/d/1z87NBveI2Gv03a9DDrfl_o4ctEYdvO1u/view?usp=drivesdk">GET MY RESUME~ HERE...</a></p>
      <a className="mailto" href="mailto:olowosusiayo@gmail.com">olowosusiayo@gmail.com</a>
      </div>
   
      <div className="footer_below">
        <div className="footer_image">
          <img src={logo} alt="logo" onClick={homeHandler}/>
        </div>
        <div className="footer_links">
            <a className="twitter" href="https://twitter.com/olowokosh">
            Twitter
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/koseemani/">
           Linkedin
            </a>
            <a className="github"  href="https://github.com/jesukoseemani">
           Github
            </a>
        </div>
      </div>
      
    </StyledFooter>
  );
}

const StyledFooter =  styled(motion.div)`
 margin-top: 10rem;
 padding-left: 2rem;

.footer_description{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
      margin-top: 1rem;
      width: 55%;
      @media(max-width: 800px){
       width: 75%;
       }
      @media(max-width: 500px){
        width: 95%;
       }

      p{
        font-size: 1.8rem;
        width: 65%;
        @media(max-width: 800px){
         width: 75%;
       }
        @media(max-width: 500px){
          width: 95%;
       }
      }

      .mailto{
        text-decoration: none;
        font-size: 1.7rem;
        color: #006EE6;
      }     
}

.footer_below{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-left: -2rem;
  .footer_image{
        img{
          width: 8rem;
          height: 8rem;
          cursor: pointer;
        }
  }
  .footer_links{

    .twitter{
      margin-right: 2rem;
      text-decoration: none;
      color: black;
      font-size: 2rem;
    }
    .linkedin{
      margin-right: 2rem;
      text-decoration: none;
      color: black;
      font-size: 2rem;
    }
    .github{
      margin-right: 2rem;
      text-decoration: none;
      color: black;
      font-size: 2rem;
    }
     

  }
}
`

export default Footer;
