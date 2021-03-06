import React from 'react';
import covid from "../img/covid.PNG"
import styled from "styled-components"


function CovidTracker() {
  return (
    <StyledCovid>
       <div className="work_description">
     <h1>Covid-19 Tracker</h1>
     <h4>A webapp that shows update on coronavirus effect.</h4>
     <p>
     With the situation around the world. Every individual wants to be carried along about the present situation which is the virus that is rapidly spread across the world.<br/><br/>
     I created a webapp where users can get the latest update about the virus. The app shows the recovery rate to death rate and shows the total cases of the people infected, providing a map and a chart for better use.<br/><br/>
     I made use of REACT & REDUX to get all running, making use of the disease.sh API. i made use of hooks and dependencies like chart.js, react-leaflet, numeral and many more.
      </p>
     <button>
       <a className="work_link" href="https://covid-19-tracker-1a338.web.app">View LIVE</a>
     </button>
    </div>
    <div className="work_image">
      <img src={covid} alt="covid"/>
    </div>
    
    </StyledCovid>
  );
}

const StyledCovid = styled.div`
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
        background-color: #2e2369;
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

export default CovidTracker;
