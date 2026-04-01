import Image from 'next/image'
import { ReactNode } from 'react'

interface AuthCardProps {
  children: ReactNode
  title?: string
}

export default function AuthCard({ children, title }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="PLR Digital Club"
            width={180}
            height={45}
            className="h-11 w-auto"
            priority
          />
        </div>
        {title && (
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">{title}</h1>
        )}
        {children}
      </div>
    </div>
  )
}
