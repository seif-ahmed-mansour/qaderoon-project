import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import ArticleDetails from "./pages/ArticleDetails";
import AddNews from "./dashboard/AddNews";
import Whowe from "./components/AboutUS/WhoWe/Whowe";
import Speech from "./components/AboutUS/Speech/Speech";
import Governorates from "./components/AboutUS/Governorates/Governorates";
import SuccessPartners from "./components/AboutUS/SuccessPartners/SuccessPartners";
import News from "./pages/News";
import ScrollToTop from "./lib/ScrollToTop";
import AddArticle from "./dashboard/AddArticle";
import AddAuthor from "./dashboard/AddAuthor";

function App() {
  // initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <Navbar />

      {/* Ensures the page scrolls to the top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles/>}/>
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/news" element={<News/>} />
        <Route path="dashboard">
            <Route path="add-article" element={<AddArticle />} />
            <Route path="add-news" element={<AddNews />} />
            <Route path="add-author" element={<AddAuthor />} />
        </Route>

        {/* من نحن Section */}
        <Route path="/about/institution" element={<Whowe/>}/>
        <Route path="/about/speech" element={<Speech/>}/>
        <Route path="/about/governorates" element={<Governorates/>}/>
        <Route path="/about/success-partners" element={<SuccessPartners/>}/>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
