import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import duplicate from '../img/duplicate.png';
import reactlogo from '../img/reactlogo.png';
import glimpse from '../img/glimpse.png';
import signUp from '../img/signUp.png';
import signIn from '../img/signIn.png';
import fullimage from '../img/fullImage.png';

function FamGramProject() {
	useEffect(() => {
		document.title = 'Okcodes-famGram project';
	}, []);

	return (
		<StyledFam
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'>
			<ProjectHeading>FAMGRAM</ProjectHeading>
			<ProjectDescription>
				FamGram is a project I built, inspired by instagram design. I decided to
				create a web application using a{' '}
				<span style={{ color: 'blue' }}>REACT</span> on the{' '}
				<span style={{ color: 'green' }}>FRONTEND</span> and{' '}
				<span style={{ color: 'blue' }}>FIREBASE</span> on the{' '}
				<span style={{ color: 'green' }}>BACKEND</span>. FamGram allows users to
				share pictures and comment & like on other users picture.
			</ProjectDescription>

			<ProjectUnOrderedList>
				<ProjectUnOrderedListWrapper>
					<ProjectListHeading>TYPE</ProjectListHeading>
					<ProjectListItems>Personal Project</ProjectListItems>
				</ProjectUnOrderedListWrapper>

				<ProjectUnOrderedListWrapper>
					<ProjectListHeading>STACK</ProjectListHeading>
					<ProjectListItems>React</ProjectListItems>
					<ProjectListItems>Styled-Components</ProjectListItems>
					<ProjectListItems>Framer-Motion</ProjectListItems>
					<ProjectListItems>firebase</ProjectListItems>
					<ProjectListItems>Redux</ProjectListItems>
					<ProjectListItems>Cypress</ProjectListItems>
				</ProjectUnOrderedListWrapper>

				<ProjectUnOrderedListWrapper>
					<ProjectListHeading>CODE</ProjectListHeading>
					<ProjectListItemsColor>
						<a href='https://github.com/jesukoseemani/FamGram'>Repository</a>
					</ProjectListItemsColor>
				</ProjectUnOrderedListWrapper>

				<ProjectUnOrderedListWrapper>
					<ProjectListHeading>LIVE</ProjectListHeading>
					<ProjectListItemsColor>
						<a href='https://famgram-e603c.web.app'>View Site</a>
					</ProjectListItemsColor>
				</ProjectUnOrderedListWrapper>
			</ProjectUnOrderedList>

			<ProjectImage src={duplicate} alt='project-image' />

			<ProjectHeadingTwo>Project Purpose and Goal</ProjectHeadingTwo>
			<ProjectDescription>
				I built this project to learn through different concepts in react also
				creating something family and friends can as a playground. firebase has
				been the talk of the developer space, which decided to take a close look
				at it by using it to power my application.
				<br />
				<br />
				i had a timeframe of a a week to build out this project giving 2hrs
				daily, and my goal was to have the application fully functioning by the
				end of that timeframe.
				<br />
				<br />
			</ProjectDescription>

			<ProjectFlex>
				<ProjectFlexLeft>
					<ProjectFlexImage src={reactlogo} alt='project-image' />
				</ProjectFlexLeft>
				<ProjectFlexRight>
					<ProjectHeadingTwo>Web Stack and Explanation</ProjectHeadingTwo>
					<ProjectDescriptionTwo>
						React was the clear choice for this project, because of its ease of
						state management and the amount of packages available. We also
						utilized Firebase as a server to host & power the web application
						<br />
						<br />
						In the future, we hope to add alot of other features to this project
						to make it more elegant, and looking into more features that will be
						updated to firebase.
						<br />
						<br />
					</ProjectDescriptionTwo>
				</ProjectFlexRight>
			</ProjectFlex>

			<ProjectPictures>
				<ProjectPicturesLeft>
					<ProjectPicturesLeftImage src={glimpse} alt='project-image' />
				</ProjectPicturesLeft>

				<ProjectPicturesRight>
					<ProjectPicturesRightImage src={signUp} alt='project-image' />
					<ProjectPicturesRightImage src={signIn} alt='project-image' />
				</ProjectPicturesRight>
			</ProjectPictures>

			<ProjectHeadingThree>Problems and Thought Process</ProjectHeadingThree>
			<ProjectDescriptionThree>
				i would have preferred to use Node, Express and Mongodb interms of
				features they provide. i found filtering and checking the firebase
				firestore abit overwelming and calls i think makes the webapp some
				seconds slow. Tho, it is a good experience with firebase firestore.
			</ProjectDescriptionThree>

			<ProjectFullImage src={fullimage} alt='project-image' />

			<ProjectHeadingTwo>Lessons Learned</ProjectHeadingTwo>
			<ProjectDescription>
				This project helped to solidify a lot my React knowledge, such as using
				hooks or updating the states. I also got a lot of great practice using
				ES6+ syntax across the entirety of the project. This was a large code
				base to manage across a team, and we all got some more great experience
				with version control and reviewing each others code.
			</ProjectDescription>
		</StyledFam>
	);
}

const StyledFam = styled(motion.div)`
	width: 100%;
	max-width: 140rem;
	padding: 2rem 5rem;
	margin: 0 auto;
	@media (max-width: 550px) {
		padding: 0rem 2rem;
	}
`;

const ProjectHeading = styled.h1`
	font-size: 5rem;
	margin: 1rem 0;
`;
const ProjectDescription = styled.p`
	font-size: 2rem;
	width: 65%;

	@media (max-width: 950px) {
		width: 85%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;
const ProjectUnOrderedList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 100%;
	list-style: none;

	@media (max-width: 600px) {
		width: 85%;
	}
	@media (max-width: 600px) {
		width: 100%;
		padding: 0;
	}
`;
const ProjectUnOrderedListWrapper = styled.div`
	@media (max-width: 600px) {
		flex-basis: 50%;
		margin-bottom: 2rem;
	}
`;
const ProjectListHeading = styled.li`
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 1rem;
`;
const ProjectListItems = styled.li`
	font-size: 1.65rem;
	font-weight: 100;
	margin-bottom: 0.4rem;
`;
const ProjectListItemsColor = styled.li`
	a {
		font-size: 1.65rem;
		font-weight: 100;
		margin-bottom: 0.4rem;
		color: #dd7935;
	}
`;
const ProjectImage = styled.img`
	width: 100%;
	height: 90rem;
	margin-bottom: 5rem;
`;
const ProjectHeadingTwo = styled.h1`
	font-size: 4rem;
	margin: 1rem 0;
`;
const ProjectDescriptionTwo = styled.p`
	font-size: 2rem;
`;
const ProjectFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media (max-width: 950px) {
		flex-direction: column;
	}
`;
const ProjectFlexLeft = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ProjectFlexImage = styled.img`
	width: 40rem;
	height: 40rem;
	object-fit: contain;
`;
const ProjectFlexRight = styled.div`
	flex: 1;
`;
const ProjectPictures = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const ProjectPicturesLeft = styled.div`
	flex: 1;
`;
const ProjectPicturesLeftImage = styled.img`
	width: 100%;
	height: 120rem;
	object-fit: contain;
	@media (max-width: 950px) {
		height: 55rem;
	}
`;
const ProjectPicturesRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
const ProjectPicturesRightImage = styled.img`
	width: 100%;
	height: 55rem;
	margin-bottom: 5%;
	object-fit: cover;

	@media (max-width: 950px) {
		object-fit: contain;
		width: 100%;
		height: 25rem;
		margin-bottom: 5%;
	}
`;
const ProjectHeadingThree = styled.h1`
	margin-top: 3rem;
	text-align: center;
	font-size: 4rem;
`;
const ProjectDescriptionThree = styled.p`
	text-align: center;
	font-size: 2rem;
	width: 65%;
	margin: 0 auto;
`;
const ProjectFullImage = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 3rem;
`;

export default FamGramProject;
