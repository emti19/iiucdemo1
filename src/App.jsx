import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import NoticeSection from './components/noticesection'
import AdmissionSection from './components/admissionsection'
import FindYourWaySection from './components/findyourwaysection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <NoticeSection />
        <AdmissionSection />
        <FindYourWaySection />
      </div>
    </>
  )
}

export default App
