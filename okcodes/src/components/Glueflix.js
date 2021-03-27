import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import styled from "styled-components"
import glueflix from "../img/netflix-react-clone.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinTongueWink } from '@fortawesome/free-solid-svg-icons';

function Glueflix() {
  return (
    <StyledGlueflix>
    <div className="work_description">
     <h1>Glueflix</h1>
     <h4>A Netflix Clone.</h4>
     <p>
     Here is a beautiful project was done with reactjs. I learned a lot from working on this website. I was curious about some functionalities which I got answers from Stack Overflow, YouTube, and plenty of other educational platforms.<br/><br/>
     I created the app to look just like Netflix, taking up all its functionality except the streaming part of Netflix<FontAwesomeIcon style={{color: "#000000"}} size="1x" icon={faGrinTongueWink}/>.<br/><br/>
     I used Firebase for the backend and Stripe for the payment method. I took advantage of the stripe extension on firebase which is a new feature of the firebase database to make payment smooth and running. Users authentication was made easy using firebase authentication and redux which is used for state management makes sharing data easy across the website.
      </p>
     <button>
       <Link className="work_link">View LIVE</Link>
     </button>
    </div>
    <div className="work_image">
      <img src={glueflix} alt="glueflix"/>
    </div>
    
  </StyledGlueflix>
  );
}

const StyledGlueflix = styled(motion.div)`
 display: flex;
   justify-content:space-between;
   align-items: center;
   margin-right: 2rem;
   margin-bottom: 2rem;
   padding: 3rem 0rem 3rem 2rem;
   width: 100%;
   color: #fafafa;
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
        border: 3px solid #000000;
        background-color: #161212;
        &:hover{
        background-color: #ee210a;
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
       height: 40rem;
       }
 
    }
`

export default Glueflix;
