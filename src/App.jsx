import React, { useState } from 'react';
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
import HeroSection from './components/herosection';
import NoticeSection from './components/noticesection';
import AdmissionSection from './components/admissionsection';
import FindYourWay from './components/findyourwaysection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NoticeSection />
      <AdmissionSection />
      <FindYourWay />
      <CourseSearch />
      <ResearchPublication />
      <LatestNews />
      <StatsCounter />
      <AboutIIUC />
      {/* <Leadership /> */}
      <Gallery />
      <VirtualVisit />
      <Footer />
    </>
  );
};

export default App;
