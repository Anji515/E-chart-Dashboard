import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box } from '@mui/material';

const EChartComponent = ({ item, apiEndpoints, index }) => {
  const chartRef = useRef(null);
  const [option,setOption]=useState({})

  useEffect(() => {
    const myChart = item?.prices?.map(entry => ({
        name: new Date(entry[0]).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        value: entry[1],
      }));
    
      setOption({
        title: {
          text: 'Prices Data',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: myChart.map(entry => entry.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'line',
            data: myChart.map(entry => entry.value),
            areaStyle: {}
          },
        ],
      });
  }, []);

  return (
  <Box>
  <h1
  style={{
    fontSize : "20px",
    color:'yellow',
    padding:'20px',
    textAlign:'left',
    textDecoration:'underline',
    textDecorationColor:'grey'
  }}
  >{apiEndpoints[index]}</h1>
  <ReactECharts option={option}/>
  </Box>
  );
};

export default EChartComponent;