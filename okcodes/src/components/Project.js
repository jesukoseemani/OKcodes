import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade2 } from '../animation';

function Project({ img, title, description, link, techStack }) {
	return (
		<StyledProject variants={fade2}>
			<div className='project_image'>
				<a href={link}>
					<img src={img} alt='project screenshots' />
				</a>
			</div>
			<div className='project_description'>
				<h1>{title}</h1>
				<p className='paragraph'>{description}</p>
				<div className='techstack'>
					<p className='techP'>
						{' '}
						<span>Tech Stack:</span> {techStack}
					</p>
				</div>

				<a href={link} className='project_link'>
					VIEW PROJECT
				</a>
			</div>
		</StyledProject>
	);
}

const StyledProject = styled(motion.div)`
	width: 100%;
	transition: all 200ms;
	cursor: pointer;

	&:hover .project_image img {
		transform: scale(1.05);
	}

	&:hover .project_description .project_link {
		border-bottom: 2.5px solid #006ee6;
	}

	span {
		font-size: 3rem;
	}

	.project_image {
		width: 100%;
		margin-bottom: 1rem;
		img {
			width: 100%;
			height: 200px;
			object-fit: contain;
			object-position: top;
			transform: scale(1);
		}
	}
	.project_description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 3.5rem;
		}
		.paragraph {
			font-size: 2rem;
			width: 95%;
			margin: 1rem 0 1.5rem 0;
			padding: 1rem;
			text-align: center;

			@media (max-width: 550) {
				width: 100%;
			}
		}
		.techstack {
			background-color: #eef7fa;
			border-radius: 1rem;
			box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
			margin: 1rem 0rem;
			padding: 0 2rem;

			.techP {
				font-size: 1.6rem;
				width: 100%;
			}

			span {
				font-size: 2rem;
			}
		}
		.project_link {
			text-decoration: none;
			text-transform: uppercase;
			border: 3px solid #006ee6;
			padding: 1.5rem 3rem;
			margin: 2rem 0;
			border-radius: 5rem;
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
`;

export default Project;
