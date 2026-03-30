'use client'

import { useEffect, useState } from 'react'

export type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

const typeClasses = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
}

const icons = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
}

export function Toast({ message, type = 'success', duration = 4000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium shadow-md transition-all duration-300 ${typeClasses[type]} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <span>{icons[type]}</span>
      <span>{message}</span>
      <button onClick={() => { setVisible(false); setTimeout(onClose, 300) }} className="ml-2 opacity-60 hover:opacity-100">
        ✕
      </button>
    </div>
  )
}

// Toast container — render this once in a layout or page
interface ToastContainerProps {
  toasts: Array<{ id: string; message: string; type?: ToastType }>
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <Toast key={t.id} message={t.message} type={t.type} onClose={() => onRemove(t.id)} />
      ))}
    </div>
  )
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type?: ToastType }>>([])

  function addToast(message: string, type: ToastType = 'success') {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, type }])
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return { toasts, addToast, removeToast }
}
