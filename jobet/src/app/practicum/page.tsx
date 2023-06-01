import Overview from "@/components/Overview"
import Output from "@/components/Output"
import Synthesis from "@/components/Synthesis"
import Documents from "@/components/Documents"
import NavbarPracticum from '@/components/NavbarPracticum'
import HeadPracticum from '../headpracticum'

export default function Home() {
  return (
    <>
    <NavbarPracticum />
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl antialiased">
      <HeadPracticum />
      <Overview />
      <Output />
      <Synthesis />
      <Documents />
    </main>
    </>
  )
}