'use client'
import DashBoard from '@/components/Dashboard'
import Dropdown from '@/components/Dropdown'
import { useState } from 'react'

export default function Home() {
  const [BitCoins, setBitCoins] = useState([])

  return (
    <main className="grid p-10">
      <Dropdown BitCoins={BitCoins} setBitCoins={setBitCoins}/>
      <DashBoard apiEndpoints={BitCoins} />
    </main>
  )
}
