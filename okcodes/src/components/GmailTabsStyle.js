import React from 'react';
import { motion } from "framer-motion"
import styled from "styled-components"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
  useGmailTabsStyles,
  useGmailTabItemStyles,
} from '@mui-treasury/styles/tabs';

import SwipeableViews from 'react-swipeable-views';
import DellasRecipe from "./DellasRecipe"
import GummyGlue from "./GummyGlue"
import GameReacher from "./GameReacher"
import Glueflix from "./Glueflix"
import CovidTracker from "./CovidTracker"
import Glurizon from "./Glurizon"

const indicatorColors = ['#006EE6', '#eeb5ff', '#7868E6', '#ee210a','#6AC0FF', '#CCF2F4'];

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
      // padding: 45,
      // maxHeight: 500,
      // color: '#fff',
    },
    slide1: {
      backgroundColor: '#006EE6',
    },
    slide2: {
      backgroundColor: '#eeb5ff',
    },
    slide3: {
      backgroundColor: '#7868E6',
    },
    slide4: {
      backgroundColor: '#ee210a',
    },
    slide5: {
      backgroundColor: '#6AC0FF',
    },
    slide6: {
      backgroundColor: '#CCF2F4',
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
      }}
    >
      <Tab
        classes={tabItem1Styles}
        disableTouchRipple
        label={'DELLAS-RECIPE'}
     
      />
      <Tab
        classes={tabItem2Styles}
        disableTouchRipple
        label={'GUMMYGLUE'}
        
      />
      <Tab
        classes={tabItem3Styles}
        disableTouchRipple
        label={'GAMEREACHER'}
        
      />
      <Tab
        classes={tabItem4Styles}
        disableTouchRipple
        label={'GLUEFLIX'}

      />
       <Tab
        classes={tabItem5Styles}
        disableTouchRipple
        label={'COVID19 TRACKER'}

      />
       <Tab
        classes={tabItem6Styles}
        disableTouchRipple
        label={'GLURIZON'}

      />
    </Tabs>
    <SwipeableViews index={tabIndex} onChangeIndex={(e) => setTabIndex(tabIndex)}>
    
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
    <DellasRecipe />
    </div>
         
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
    <GummyGlue />
    </div>
    
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
    <GameReacher />
    </div>

    <div style={Object.assign({}, styles.slide, styles.slide4)}>
    <Glueflix />
    </div>

    <div style={Object.assign({}, styles.slide, styles.slide5)}>
    <CovidTracker />
    </div>

    <div style={Object.assign({}, styles.slide, styles.slide6)}>
    <Glurizon />
    </div>
  
  </SwipeableViews>
    
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
width: 100%;
max-height: 100vh;
padding: 2.5rem 0rem;

`

export default GmailTabsStyle;
