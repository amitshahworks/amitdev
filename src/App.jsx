import PageLoader from './components/ui/PageLoader'
import ScrollProgress from './components/ui/ScrollProgress'
import Header from './components/layout/Header'
import CoreExpertise from './components/sections/Capabilities'
import Journey from './components/sections/EngineeringJourney'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Certifications from './components/sections/Certifications'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import CommandPalette from './components/ui/CommandPalette'
import KeyboardShortcuts from './components/ui/KeyboardShortcuts'

function App() {
  return (
    <>
    <PageLoader />
      <ScrollProgress />
      <CommandPalette />
      <KeyboardShortcuts />
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <CoreExpertise />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App