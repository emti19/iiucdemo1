import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import CourseSearch from './components/CourseSearch';
import ResearchPublication from './components/ResearchPublication';
import AboutIIUC from './components/AboutIIUC';
import StatsCounter from './components/StatsCounter';
import LatestNews from './components/LatestNews';
import Leadership from './components/Leadership';
import Gallery from './components/Gallery';
import VirtualVisit from './components/VirtualVisit';
import Footer from './components/Footer';
import HeroSection from './components/herosection'
import NoticeSection from './components/noticesection'
import AdmissionSection from './components/admissionsection'
import FindYourWaySection from './components/findyourwaysection'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <NoticeSection />
        <AdmissionSection />
        <FindYourWaySection />
        <CourseSearch />
        <ResearchPublication />
        <AboutIIUC />
        <StatsCounter />
        <LatestNews />
        <Leadership />
        <Gallery />
        <VirtualVisit />
        <Footer />
      </div>
    </>
  );
}

export default App;
