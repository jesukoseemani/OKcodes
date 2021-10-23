import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
	useGmailTabsStyles,
	useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs';

import SwipeableViews from 'react-swipeable-views';
import Peddle from './Peddle';
import GummyGlue from './GummyGlue';
import GameReacher from './GameReacher';
import GitFind from './GitFind';
import CovidTracker from './CovidTracker';
import Famgram from './Famgram';

const indicatorColors = [
	'#006EE6',
	'#2e2369',
	'#eeb5ff',
	'#7868E6',
	'#ee210a',
	'#6AC0FF',
];

const GmailTabsStyle = () => {
	const [tabIndex, setTabIndex] = React.useState(0);
	const tabsStyles = useGmailTabsStyles({ indicatorColors });
	const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] });
	const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] });
	const tabItem3Styles = useGmailTabItemStyles({ color: indicatorColors[2] });
	const tabItem4Styles = useGmailTabItemStyles({ color: indicatorColors[3] });
	const tabItem5Styles = useGmailTabItemStyles({ color: indicatorColors[4] });
	const tabItem6Styles = useGmailTabItemStyles({ color: indicatorColors[5] });

	const styles = {
		slide: {
			height: '600px',
			overflow: 'hidden',
		},
		slide1: {
			backgroundColor: '#006EE6',
		},
		slide2: {
			backgroundColor: '#2e2369',
		},
		slide3: {
			backgroundColor: '#eeb5ff',
		},
		slide4: {
			backgroundColor: '#7868E6',
		},
		slide5: {
			backgroundColor: '#ee210a',
		},
		slide6: {
			backgroundColor: '#6AC0FF',
		},
	};

	return (
		<StyledWork>
			<Tabs
				classes={tabsStyles}
				value={tabIndex}
				onChange={(e, index) => setTabIndex(index)}
				TabIndicatorProps={{
					children: <div className={`MuiIndicator-${tabIndex}`} />,
				}}>
				<Tab classes={tabItem1Styles} disableTouchRipple label={'FAMGRAM'} />
				<Tab
					classes={tabItem2Styles}
					disableTouchRipple
					label={'COVID19 TRACKER'}
				/>
				<Tab classes={tabItem3Styles} disableTouchRipple label={'PEDDLE'} />
				<Tab classes={tabItem4Styles} disableTouchRipple label={'GITFIND'} />
				<Tab classes={tabItem5Styles} disableTouchRipple label={'GUMMYGLUE'} />
				<Tab
					classes={tabItem6Styles}
					disableTouchRipple
					label={'GAMEREACHER'}
				/>
			</Tabs>
			<SwipeableViews
				index={tabIndex}
				onChangeIndex={(e) => setTabIndex(tabIndex)}>
				<div style={Object.assign({}, styles.slide, styles.slide1)}>
					<Famgram />
				</div>

				<div style={Object.assign({}, styles.slide, styles.slide2)}>
					<CovidTracker />
				</div>

				<div style={Object.assign({}, styles.slide, styles.slide3)}>
					<Peddle />
				</div>

				<div style={Object.assign({}, styles.slide, styles.slide4)}>
					<GitFind />
				</div>

				<div style={Object.assign({}, styles.slide, styles.slide5)}>
					<GummyGlue />
				</div>

				<div style={Object.assign({}, styles.slide, styles.slide6)}>
					<GameReacher />
				</div>
			</SwipeableViews>
		</StyledWork>
	);
};

const StyledWork = styled(motion.div)`
	width: 100%;
	padding: 2.5rem 0rem;
	@media (max-width: 1200px) {
		display: none;
	}
	@media (min-width: 600px) {
		.MuiTab-root {
			min-width: auto;
		}
	}
`;

export default GmailTabsStyle;
