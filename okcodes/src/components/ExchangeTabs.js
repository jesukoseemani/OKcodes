import React from 'react';
import styled from "styled-components"
import Project from "./Project"
import gamereacher from "../img/gamereacher.PNG"
import gummyglue from "../img/gummyglue.PNG"
import covid from "../img/covid.PNG"
import fotoSpirit from "../img/fotospirit.PNG"
import famgram from "../img/famgram12.PNG"
import git from "../img/githubb.PNG"

function ExchangeTabs() {
  return (
    <StyledTabs>
       <Project img={famgram} title="FAMGRAM" description="This is a Social media webapp for sharing pictures and connecting to friends" link="https://famgram-e603c.web.app"/>

       <Project img={covid} title="COVID-19-Tracker" description="This is a webapp which gives an update on the CoronaVirus effect on the world" link="https://covid-19-tracker-1a338.web.app"/>

       <Project img={fotoSpirit} title="FOTOSPIRIT" description="This is a photography website build for a photo-videography agency created using react and its packages" link="https://fotospirit.netlify.app"/>
      
      <Project img={git} title="GITFIND" description="This is a graphql api project. Using github api to search for users details with Vanilla javaScript" link="https://git-hub-profile-finder.netlify.app" />

      <Project img={gummyglue} title="GUMMYGLUE" description="This is a personal music app with over 50 Nigeria songs" link="https://gummyglue.netlify.app"/>
      
      <Project img={gamereacher} title="GAMEREACHER" description="This is a website for game lovers where you can search for new, favourite games on the planet" link="https://gamereacher.netlify.app"/>
     
    </StyledTabs>
  );
}
const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  margin-top: 5rem;
  /* padding: 0rem 5rem; */
  transition: all 100ms;
  
@media(min-width: 900px){
  display: none;
}
@media(max-width: 750px){
  grid-template-columns: 1fr;
}
@media(max-width: 550px){
  padding: 0rem .6rem;
       }  

`


export default ExchangeTabs;
