import React from 'react';
import styled from "styled-components"
import Project from "./Project"
import gamereacher from "../img/gamereacher.PNG"
import dellasrecipe from "../img/dellasrecipe.png"
import glueflix from "../img/netflix-react-clone.PNG"
import gummyglue from "../img/gummyglue.PNG"

function ExchangeTabs() {
  return (
    <StyledTabs>
       <Project img={dellasrecipe} title="DELLAS-RECIPE" description="This is a website for a photography company built in react" link="https://fotospirit.netlify.app" />
      
      <Project img={glueflix} title="GLUEFLIX" description="This is a tourist website built using HTML&CSS" link="https://flamboyant-perlman-b8cd62.netlify.app" />
      
      <Project img={gamereacher} title="GAMEREACHER" description="This is a clone homepage of Netflix using HTML&CSS" link="https://netflixclonen.netlify.app"  />

      <Project img={gummyglue} title="GUMMYGLUE" description="This is a clone homepage of Discord website using svg animations in CSS" link="https://netflixclonen.netlify.app"  />
    </StyledTabs>
  );
}
const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  padding: 0rem 1rem;
  transition: all 100ms; 
  margin-bottom: 3rem;
  
@media(min-width: 900px){
  display: none;
}
`


export default ExchangeTabs;
