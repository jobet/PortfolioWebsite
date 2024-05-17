"use client"
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from "next-themes"
import { Mukta_Mahee } from 'next/font/google'
const muktaMahee = Mukta_Mahee({ 
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'] 
})

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={muktaMahee.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
