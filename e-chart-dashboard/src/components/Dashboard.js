import React, { useState, useEffect } from "react";
import EChartComponent from "./ChartData";

const DashBoard = ({ apiEndpoints = [] }) => {

  const [data, setData] = useState(apiEndpoints);
  
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
      <div style={{
        width: '90%',
        margin:'auto',
      }}>
        {data.length > 0 ?
          (data.map((item, index) => (
            <EChartComponent
              key={Date.now() + Math.random()}
              apiEndpoints={apiEndpoints}
              index={index}
              data={item}
              />
              ))):(<div style={{margin: '120px auto'}}>
                <h1 style={{ marginBottom:'20px',fontSize:'22px',textAlign:'center',color:'orange', fontWeight:'bolder', fontFamily:'cursive'}}>Welcome to Elegant Crypto Dashboard</h1>
                <img  width={'700px'} style={{ borderRadius:'16px',margin:'auto', height:'450px'}} src='https://www.infiniteblocktech.com/img/home/home_01.gif' alt='loader'/>
                </div>
                )}
      </div>
    </div>
  );
};

export default DashBoard;