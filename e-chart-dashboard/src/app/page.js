'use client'
import DashBoard from '@/components/Dashboard'
import Dropdown from '@/components/Dropdown'
import { useState } from 'react'

export default function Home() {
  const [BitCoins, setBitCoins] = useState([])

  return (
    <main className="margin-auto width-100% p-10 hight-100vh">
      <h1
      style={{
        fontSize:'25px',
        color: 'yellow',
        textAlign: 'center',
        textDecoration: 'underline',
        textDecorationColor: 'grey',
        cursor: 'pointer',
        transition: 'font-size 0.3s ease-in-out', 
      }}
    >
      ELEGANT Crypto
    </h1>
      <Dropdown BitCoins={BitCoins} setBitCoins={setBitCoins}/>
      <DashBoard apiEndpoints={BitCoins} />
    </main>
  )
}
