import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactForm from "@/components/ContactForm"
import ContactPage from "@/components/ContactPage"
import Resume from "@/components/Resume"
import Navbar from '@/components/Navbar'
import Head from './head'
import { Analytics } from '@vercel/analytics/react'
export default function Home() {
  return (
    <>
    <Navbar />
    <Head/>
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactPage />
    </div>
    <Analytics />
    </>
  )
}
