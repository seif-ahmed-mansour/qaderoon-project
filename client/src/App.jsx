import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import ArticleDetails from "./pages/ArticleDetails";
import AddReport from "./dashboard/AddReport";
import AddNews from "./dashboard/AddNews";
import Whowe from "./components/AboutUS/WhoWe/Whowe";
import Speech from "./components/AboutUS/Speech/Speech";
import News from "./pages/News";

function App() {
  // initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles/>}/>
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/news" element={<News/>} />
        <Route path="dashboard">
            <Route path="add-article" element={<AddReport />} />
            <Route path="add-news" element={<AddNews />} />
        </Route>

        {/* من نحن Section */}
        <Route path="/about/institution" element={<Whowe/>}/>
        <Route path="/about/speech" element={<Speech/>}/>

      </Routes>
      <Footer />
    </main>
  );
}

export default App;
