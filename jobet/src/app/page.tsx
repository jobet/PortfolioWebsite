import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactForm from "@/components/ContactForm"
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl antialiased">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </main>
    </>
  )
}
