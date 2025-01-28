import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllArticles from "./components/AllArticles/AllArticles";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";

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

      </Routes>
      <Footer />
    </main>
  );
}

export default App;
