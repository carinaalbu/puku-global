import TopBanner from '@/components/layout/TopBanner'
import Navbar from '@/components/layout/Navbar'
import Background from '@/components/layout/Background'
import HeroSection from '@/components/sections/HeroSection'
import CompanySection from '@/components/sections/CompanySection'
import ProjectSection from '@/components/sections/ProjectSection'

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#070f1f' }}>
      <TopBanner />
      <Background />
      
      <div className="relative z-10 min-h-screen pointer-events-auto flex flex-col items-center">
        <Navbar />
        <HeroSection />
        <CompanySection />
        <ProjectSection />
      </div>
    </div>
  )
}
