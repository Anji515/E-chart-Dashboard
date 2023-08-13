"use client";
import DashBoard from "@/components/Dashboard";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";

export default function Home() {
  const [BitCoins, setBitCoins] = useState([]);

  return (
    <main className="margin-auto width-100% p-10 hight-100vh">
      <h1
        style={{
          fontSize: "27px",
          color: "yellow",
          textAlign: "center",
          fontFamily: "cursive",
          cursor: "pointer",
          transition: "font-size 0.3s ease-in-out",
          top:0,
          position: "fixed",
          zIndex: 99,
          backgroundColor:'#10123D',
          width:'100%',
          padding:'12px 0px'
        }}
      >
        Elegant Crypto
      </h1>
      <Dropdown
        BitCoins={BitCoins}
        setBitCoins={setBitCoins}
      />
      <DashBoard  apiEndpoints={BitCoins} />
    </main>
  );
}
