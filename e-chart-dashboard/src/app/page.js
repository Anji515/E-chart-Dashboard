'use client'
import DashBoard from '@/components/Dashboard'
import Dropdown from '@/components/Dropdown'
import { useState } from 'react'

export default function Home() {
  const [BitCoins, setBitCoins] = useState([])

  return (
    <main className="margin-auto width-100% p-10 hight-100vh">
      <Dropdown BitCoins={BitCoins} setBitCoins={setBitCoins}/>
      <DashBoard apiEndpoints={BitCoins} />
    </main>
  )
}
