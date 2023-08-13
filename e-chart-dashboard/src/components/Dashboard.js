import React, { useState, useEffect } from "react";
import EChartComponent from "./ChartData";

const DashBoard = ({ apiEndpoints = [] }) => {
  //   const apiEndpoints = ['ethereum', 'dogecoin', 'solana'];

  const [data, setData] = useState(apiEndpoints);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const fontSize = hovered ? '22px' : '20px';
  const color = hovered ? 'white' : 'yellow'

  
  async function fetchDataFromEndpoints(endpoints) {
    let newArray = [];
    for (let endpoint of endpoints) {
      try {
        const resp = await fetch(
          `https://api.coingecko.com/api/v3/coins/${endpoint.toLowerCase()}/market_chart?vs_currency=usd&days=365&interval=daily`
        );
        const data = await resp.json();
        newArray.push(data);
      } catch (error) {
        console.error(`Error fetching data for ${endpoint}:`, error);
        newArray.push(null);
      }
    }
    return newArray
  }

  useEffect(() => {
    const fetchData = async () => {
      const newArray = await fetchDataFromEndpoints(apiEndpoints);
      setData(newArray);
    };

    fetchData();
  }, [apiEndpoints.length]);

  return (

    <div >
      <h1
      style={{
        fontSize,
        color: color,
        padding: '20px',
        textAlign: 'center',
        textDecoration: 'underline',
        textDecorationColor: 'grey',
        cursor: 'pointer',
        transition: 'font-size 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Elegant Crypto
    </h1>
      <div style={{
        gap : "10px"
      }}>
        {data.length > 0 ?
          (data.map((item, index) => (
            <EChartComponent
              key={Date.now() + Math.random()}
              apiEndpoints={apiEndpoints}
              index={index}
              item={item}
              />
              ))):<img width={'700px'} style={{margin:'auto', height:'500px', padding:'30px'}} src='https://www.infiniteblocktech.com/img/home/home_01.gif' alt='loader'/>}
      </div>
    </div>
  );
};

export default DashBoard;