import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box } from '@mui/material';

const EChartComponent = ({ data, apiEndpoints, index }) => {

  const [option,setOption]=useState({})

  useEffect(() => {
    const myChart = data?.prices?.map(entry => ({
        name: new Date(entry[0]).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        value: entry[1],
      }));
    
      setOption({
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
  <Box style={{height:'500px', border:'0px solid red', boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", padding:'10px', marginTop:'140px', backgroundColor:'#202256', borderRadius:'16px'}}>
  <h1
  style={{
    fontSize : "20px",
    color:'orange',
    padding:'20px',
    textAlign:'left',
  }}
  >{apiEndpoints[index]} E-chart Data</h1>
  <ReactECharts  style={{height:'400px', width:'100%'}} option={option}/>
  </Box>
  );
};

export default EChartComponent;