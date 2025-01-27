import HomeLandingSlider from "./components/home/LandingSlider/HomeLandingSlider";
import Navbar from "./components/Navbar/Navbar";
import EgyptVision from "./components/home/EgyptVision/EgyptVision";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Routes></Routes> */}
      <Navbar />
      <div className="w-full h-44"></div>
      <HomeLandingSlider />
      <div className="w-full h-44"></div>
      <EgyptVision />
      <div className="w-full h-44"></div>
      <Footer />
    </>
  );
}

export default App;
