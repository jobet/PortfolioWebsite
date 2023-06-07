import Overview from "@/components/Overview"
import Output from "@/components/Output"
import Synthesis from "@/components/Synthesis"
import Documents from "@/components/Documents"
import NavbarPracticum from '@/components/NavbarPracticum'
import HeadPracticum from '../headpracticum'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
    <NavbarPracticum />
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeadPracticum />
      <Overview />
      <Output />
      <Synthesis />
      <Documents />
      <Analytics />
    </main>
    </>
  )
}