import HomeLandingSlider from "./components/home/LandingSlider/HomeLandingSlider";
import Navbar from "./components/Navbar/Navbar";
import EgyptVision from "./components/home/EgyptVision/EgyptVision";
import Footer from "./components/Footer/Footer";
import AboutSectionComponent from "./components/home/about-section/AboutSectionComponent";
import StatisticsSection from "./components/home/statistics-section/StatisticsSection";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {

  // initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <main>
      {/* <Routes></Routes> */}
      <Navbar />
      <HomeLandingSlider />
      <AboutSectionComponent />
      <StatisticsSection />
      <EgyptVision />
      <Footer />
    </main>
  );
}

export default App;
