import React from 'react';
import styled from "styled-components"
import FlowChart from "./FlowChart"
import FlowChartMin from "./FlowChartMin"
import FlowChartSmall from "./FlowChartSmall"
import FlowChartSL from "./FlowChartSL"
function ConnectChart() {
  return (
    <>
      <MaxWidth>
      <FlowChart />
      </MaxWidth>
    
    <MinWidth>
    <FlowChartMin />
    </MinWidth>
      
    <SmallestWidth>
    <FlowChartSmall />
    </SmallestWidth>
     
    <SmallWidth>
    <FlowChartSL />
    </SmallWidth>
      
    </>
  );
}

const MaxWidth = styled.div`
display: block;
@media (max-width:1040px){
  display: none;
}
`

const MinWidth = styled.div`
display: none;
@media (max-width:1040px){
  display: block;
}
@media (max-width:850px){
  display: none;
}

`

const SmallWidth = styled.div`
display: none;
@media (max-width:850px){
  display: block;
}
@media (max-width:650px){
  display: none;
}

`

const SmallestWidth = styled.div`
display: none;
@media (max-width:650px){
  display: block;
}

`


export default ConnectChart;
