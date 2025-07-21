import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import FindYourWay from './components/findyourwaysection';
import CourseSearch from './components/CourseSearch';
import ResearchPublication from './components/ResearchPublication';
import LatestNews from './components/LatestNews';
import StatsCounter from './components/StatsCounter';
import AboutIIUC from './components/AboutIIUC';
import Gallery from './components/Gallery';
import VirtualVisit from './components/VirtualVisit';
import Footer from './components/Footer';
import NoticeSection2 from './components/noticesection2';
import AdmissionSection2 from './components/admissionsection2';

const V2 = () => (
  <>
    <Navbar />
    <HeroSection
      hideQuickLinks={true}
      gradientHeight='h-[20rem]'
      textLower={true}
    />
    <NoticeSection2 style={{ backgroundColor: '#003716' }} />
    <AdmissionSection2
      style={{ backgroundColor: '#003716' }}
      headingWhite={true}
    />
    <FindYourWay />
    <CourseSearch />
    <ResearchPublication />
    <LatestNews />
    <StatsCounter />
    <AboutIIUC />
    <Gallery />
    <VirtualVisit />
    <Footer />
  </>
);

export default V2;
