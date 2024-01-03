import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page'


const inter = Poppins({ subsets: ['latin'],weight:['700'] })

export const metadata: Metadata = {
  icons: {
    icon: '/IMG-f.png', // /public path
  },
  title: 'Kartik Portfolio',
  description: 'Karttk giri blockchain devlopment portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
