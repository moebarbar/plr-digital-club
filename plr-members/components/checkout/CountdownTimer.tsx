'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 15 * 60
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const seconds = String(timeLeft % 60).padStart(2, '0')

  return (
    <div>
      <div className="flex gap-2 items-center mt-8 mb-2">
        <div className="bg-white/20 rounded-lg px-4 py-3 text-center">
          <div className="text-3xl font-mono font-bold text-white">{minutes}</div>
          <div className="text-xs text-blue-300 mt-1">MIN</div>
        </div>
        <div className="text-2xl font-bold text-white/60 mb-4">:</div>
        <div className="bg-white/20 rounded-lg px-4 py-3 text-center">
          <div className="text-3xl font-mono font-bold text-white">{seconds}</div>
          <div className="text-xs text-blue-300 mt-1">SEC</div>
        </div>
      </div>
      <p className="text-xs tracking-widest text-blue-300 text-center mb-6">LIMITED TIME DEAL</p>
    </div>
  )
}
