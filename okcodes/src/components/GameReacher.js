import React from 'react';
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
       A challenge was given to me by a senior developer which happens to be my mentor. He challenged me to build a website for game lovers, a place to see the newest games and to search for games. I took up the challenge which results in this project.<br/><br/>
       I built this app with react, redux, router, and I used styled-components for the styling. I used an API from rawg.io to fetch the information. Thanks to font-awesome CSS Selector for the star- rendering.<br/><br/>
      
       Because of the need to store data, I implemented Local storage concept to the app which works great.

        </p>
       <button>
         <a className="work_link" href="https://gamereacher.netlify.app/">View LIVE</a>
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
   height: 100%;
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
        border: 1px solid #f3f3f3;
        background-color: #211b2c;
        border-radius: 3rem;
        &:hover{
          background-color: #6AC0FF;
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
       object-fit: contain;
       }
 
    }
`

export default GameReacher;
