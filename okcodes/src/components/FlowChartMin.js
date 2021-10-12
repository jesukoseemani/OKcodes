import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import Content from './Content';
import Maincontent from './Maincontent';

import disneyVideo from '../img/1564674844-disney.mp4';
import netflixVideo from '../img/1564676115-marvel.mp4';
import facebookVideo from '../img/1564676296-national-geographic.mp4';
import whatsappVideo from '../img/1608229455-star-wars.mp4';

import disney from '../img/Disney+-Logo.wine.svg';
import facebook from '../img/Facebook-Logo.wine.svg';
import discord from '../img/Discord_(software)-Logo.wine.svg';
import netflix from '../img/Netflix-Logo.wine.svg';
import whatsapp from '../img/WhatsApp-Logo.wine.svg';
// the diagram model
const initialSchema = createSchema({
	nodes: [
		{ id: 'node-1', content: <Maincontent />, coordinates: [0, 100] },
		{
			id: 'node-2',
			content: (
				<Content
					video={netflixVideo}
					img={netflix}
					title='netflix'
					link='https://glueflix-68809.web.app'
				/>
			),
			coordinates: [200, 0],
		},
		{
			id: 'node-3',
			content: (
				<Content
					video={whatsappVideo}
					img={whatsapp}
					title='whatsapp'
					link='https://whats-app-phi.vercel.app'
				/>
			),
			coordinates: [300, 100],
		},
		{
			id: 'node-4',
			content: (
				<Content
					video={disneyVideo}
					img={facebook}
					title='facebook'
					link='https://facebook-theta.vercel.app'
				/>
			),
			coordinates: [400, 200],
		},
		{
			id: 'node-5',
			content: (
				<Content
					video={whatsappVideo}
					img={discord}
					title='discord'
					link='https://discordclonen.netlify.app'
				/>
			),
			coordinates: [500, 300],
		},
		{
			id: 'node-6',
			content: (
				<Content
					video={facebookVideo}
					img={disney}
					title='disney'
					link='https://disney-7de41.web.app/'
				/>
			),
			coordinates: [600, 400],
		},
	],
	links: [
		{ input: 'node-1', output: 'node-2' },
		{ input: 'node-1', output: 'node-3' },
		{ input: 'node-1', output: 'node-4' },
		{ input: 'node-1', output: 'node-5' },
		{ input: 'node-1', output: 'node-6' },
	],
});

const UncontrolledDiagram = () => {
	// create diagrams schema
	const [schema] = useSchema(initialSchema);

	return (
		<div style={{ height: '68vh' }}>
			<Diagram schema={schema} />
		</div>
	);
};

function FlowChartMin() {
	return (
		<StyledFlow>
			<h1>I Like to recreate Popular Webapp...</h1>
			<p>
				I design - code - get stucked - sit back & drink soda - code - get
				stucked - sleep on stack-overflow - solve the problem - final product.
				Check the project live below.
			</p>
			<UncontrolledDiagram />
			<div className='coming_button'>
				<Link to='/projects'>
					<button>Check out my other Projects</button>
				</Link>
			</div>
		</StyledFlow>
	);
}

const StyledFlow = styled.div`
	margin-top: 1.5rem;
	h1 {
		padding-top: 2rem;
	}
	.coming_button {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;

		button {
			text-transform: uppercase;
			border: 3px solid #006ee6;
			padding: 15px 30px;
			border-radius: 50px;
			color: #006ee6;
			font-size: 1.1rem;
			letter-spacing: 1px;
			background-color: #fafafa;
			outline: none;
			cursor: pointer;
			position: relative;
			z-index: 1000;
			&:hover {
				color: #fafafa;
			}

			&::before {
				content: '';
				background-color: #006ee6;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 50px;
				outline: none;
				z-index: -1;
				transform: scaleX(0);
				transform-origin: left;
				transition: transform 0.5s;
			}
			&:hover::before {
				transform: scaleY(1);
				transform-origin: right;
			}
		}
	}
	p {
		width: 55%;
		font-size: 1.85rem;
		line-height: 150%;
		color: black;
		text-align: justify;
		@media (max-width: 800px) {
			width: 75%;
			text-align: left;
		}
		@media (max-width: 500px) {
			width: 95%;
		}
	}

	.bi.bi-diagram {
		border: 0;
		border-radius: 0;
		background-color: inherit;
		box-shadow: none;
	}

	.bi.bi-diagram .bi.bi-diagram-node.bi-diagram-node-default {
		border-radius: 0;
		background-color: white;
		border: 0;
		margin: 0;
		padding: 0;
	}
`;

export default FlowChartMin;
