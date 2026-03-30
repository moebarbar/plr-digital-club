import { ReactNode } from 'react'

interface AuthCardProps {
  children: ReactNode
  title?: string
}

export default function AuthCard({ children, title }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <p className="font-bold text-[#1A1A4E] text-center text-xl mb-6">⚡ PLR DIGITAL CLUB</p>
        {title && (
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">{title}</h1>
        )}
        {children}
      </div>
    </div>
  )
}
