import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const EChartComponent = ({ item, apiEndpoints, index }) => {
  const chartRef = useRef(null);
  const [option,setOption]=useState({})
//   let data = item?.prices?.map((entry) => ({
//     name:  new Date(entry[0]).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
//     value: entry[1],
//   }));

  useEffect(() => {
    const myChart = item?.prices?.map(entry => ({
        name: new Date(entry[0]).toLocaleDateString(),
        value: entry[1],
      }));
    
      setOption({
        title: {
          text: 'Price Data',
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

  return (<ReactECharts option={option}/>);
};

export default EChartComponent;