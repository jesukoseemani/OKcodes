import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import gamereacher from '../img/gamereacher.PNG';
import gummyglue from '../img/gummyglue.PNG';
import covid from '../img/covid.PNG';
import peddle from '../img/peddle.png';
import famgram from '../img/famgram12.PNG';
import git from '../img/githubb.PNG';

function ExchangeTabs() {
	return (
		<StyledTabs>
			<Project
				img={famgram}
				title='FAMGRAM'
				description='This is a Social media webapp for sharing pictures and connecting to friends.'
				link='https://famgram-e603c.web.app'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>

			<Project
				img={covid}
				title='COVID-19-Tracker'
				description='This is a webapp which gives an update on the CoronaVirus effect on the world.'
				link='https://covid-19-tracker-1a338.web.app'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>

			<Project
				img={peddle}
				title='PEDDLE'
				description='This is a landing page of a website build for a Software Service Provider agency.'
				link='https://paddle-assessment-test.web.app/'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>

			<Project
				img={git}
				title='GITFIND'
				description='This is a graphql api project. Using github api to search for users details with Vanilla javaScript.'
				link='https://git-hub-profile-finder.netlify.app'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>

			<Project
				img={gummyglue}
				title='GUMMYGLUE'
				description='This is a personal music app with over 50 Nigeria songs.'
				link='https://gummyglue.netlify.app'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>

			<Project
				img={gamereacher}
				title='GAMEREACHER'
				description='This is a website for game lovers where you can search for new, favourite games on the planet.'
				link='https://gamereacher.netlify.app'
				techStack='React, React-Router, Axios, Styled-Components, Framer-Motion'
			/>
		</StyledTabs>
	);
}
const StyledTabs = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	grid-row-gap: 10rem;
	/* padding: 0rem 5rem; */
	transition: all 100ms;

	@media (min-width: 1200px) {
		display: none;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-row-gap: 10rem;
	}
	@media (max-width: 550px) {
		padding: 0rem 0.6rem;
	}
`;

export default ExchangeTabs;
