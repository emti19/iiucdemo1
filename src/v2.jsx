import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import NoticeSection from './components/noticesection';
import AdmissionSection from './components/admissionsection';
import FindYourWay from './components/findyourwaysection';
import CourseSearch from './components/CourseSearch';
import ResearchPublication from './components/ResearchPublication';
import LatestNews from './components/LatestNews';
import StatsCounter from './components/StatsCounter';
import AboutIIUC from './components/AboutIIUC';
import Gallery from './components/Gallery';
import VirtualVisit from './components/VirtualVisit';
import Footer from './components/Footer';

const V2 = () => (
  <>
    <Navbar />
    <HeroSection />
    <NoticeSection style={{ backgroundColor: '#003716' }} />
    <AdmissionSection
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
