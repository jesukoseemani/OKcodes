import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import styled from "styled-components"
import gamereacher from "../img/gamereacher.PNG"


function GameReacher() {
  return (
    <StyledGamereacher>
      <div className="work_description">
       <h1>GameReacher</h1>
       <h4>A Game platform for game-lovers.</h4>
       <p>
       A challenge was given to me by a senior developer which happens to be my mentor. We both love to play the latest games and complete stages in adventure games. One day, he challenged me to build a website for game lovers, a place to see the newest games and to search for games. I took up the challenge which results in this project.<br/><br/>
       I built this app with react, redux, router, and I used styled-components for the styling. I used an API from rawg.io to fetch the information. Thanks to font-awesome CSS Selector for the star- rendering.<br/><br/>
       I always like to put out a little bit of animation in my project, I believe it adds to the User experience.<br/><br/>
       Because of the need to store data, I implemented Local storage concept to the app which works great.

        </p>
       <button>
         <Link className="work_link">View LIVE</Link>
       </button>
      </div>
      <div className="work_image">
        <img src={gamereacher} alt="gamereacher"/>
      </div>
      
    </StyledGamereacher>
  );
}

const StyledGamereacher = styled(motion.div)`
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
        background-color: #7868E6;
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

export default GameReacher;
