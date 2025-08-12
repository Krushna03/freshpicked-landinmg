import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreshPicked',
  description: 'FreshPicked',
  generator: 'FreshPicked',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
