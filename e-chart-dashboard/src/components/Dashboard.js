import React, { useState, useEffect } from "react";
import EChartComponent from "./ChartData";

const DashBoard = ({ apiEndpoints = [] }) => {
  //   const apiEndpoints = ['ethereum', 'dogecoin', 'solana'];

  const [data, setData] = useState(apiEndpoints);

  async function fetchDataFromEndpoints(endpoints) {
    const newArray = [];

    for (const endpoint of endpoints) {
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

    return newArray;
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
      <h1>DashBoard</h1>
      <div style={{
        // display : "grid",
        // gridTemplateColumns: "repeat(2,1fr)",
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
              ))):<img src='https://www.infiniteblocktech.com/img/home/home_01.gif' alt='loader'/>}
      </div>
    </div>
  );
};

export default DashBoard;