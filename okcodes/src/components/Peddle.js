import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import peddle from '../img/peddle.png';

function Peddle() {
	return (
		<StyledRecipe>
			<div className='work_description'>
				<h1>Peddle</h1>
				<h4>
					This is a landing page of a website build for a Software Service
					Provider agency
				</h4>
				<p>
					I started off building the interface of the website using figma.
					<br />
					<br />
					This Web App is built using React and styled with Styled-Components.
					Axios was used for the http call. React hooks/packages used to achieve
					certain implementation such as state management, routing e.t.c.
					<br />
					<br />
					Custom hook was created to implement infinite pagination. Framer
					motion was use for animations, it's a light weighted library hugely
					supported in react which is simple to use. React-interception-observer
					was also used to make certain event triggers in the dom. Reacttimeago,
					FontAwesome library were used in the project.
				</p>
				<button>
					<a
						className='work_link'
						href='https://paddle-assessment-test.web.app/'>
						View LIVE
					</a>
				</button>
			</div>
			<div className='work_image'>
				<img src={peddle} alt='FotoSpirit' />
			</div>
		</StyledRecipe>
	);
}

const StyledRecipe = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 2rem;
	margin-bottom: 2rem;
	padding: 3rem 0rem 3rem 2rem;
	width: 100%;
	color: #000000;
	height: 100%;
	.work_description {
		flex: 1;
		h1 {
			margin-bottom: 3rem;
		}

		p {
			/* text-align:center; */
			width: 100%;
			color: #000000;
		}

		button {
			border: 1px solid #f3f3f3;
			background-color: #211b2c;
			border-radius: 3rem;
			&:hover {
				background-color: #eeb5ff;
				color: white;
			}
			.work_link {
				text-decoration: none;
				/* color: #202020; */
				color: #fafafa;
				font-size: 1.65rem;
			}
			&:hover .work_link {
				color: white;
			}
		}
	}
	.work_image {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 90%;
			object-fit: contain;
		}
	}
`;

export default Peddle;
