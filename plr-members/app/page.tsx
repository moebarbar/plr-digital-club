import { redirect } from 'next/navigation'

// Next.js root — redirects to /checkout
// The Vite marketing homepage handles "/" via Express before this is reached.
// This redirect is a safety net in case Next.js root is hit directly.
export default function RootPage() {
  redirect('/checkout')
}
