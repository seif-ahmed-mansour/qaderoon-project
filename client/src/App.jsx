import HomeLandingSlider from "./components/home/LandingSlider/HomeLandingSlider";
import Navbar from "./components/Navbar/Navbar";
import EgyptVision from "./components/home/EgyptVision/EgyptVision";
import Footer from "./components/Footer/Footer";
import AboutSectionComponent from "./components/home/about-section/AboutSectionComponent";
import StatisticsSection from "./components/home/statistics-section/StatisticsSection";

function App() {
  return (
    <main>
      {/* <Routes></Routes> */}
      <Navbar />
      <HomeLandingSlider />
      <AboutSectionComponent />
      <StatisticsSection />
      <EgyptVision />
      <Footer />
      <sofy/>
    </main>
  );
}

export default App;
