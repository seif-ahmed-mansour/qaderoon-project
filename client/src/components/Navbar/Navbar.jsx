import { useState, useEffect } from "react";
import "./Navbar.css";
import {
  FaCaretDown,
  FaPhoneAlt,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar flex justify-between px-24 py-6 sticky top-0 z-50 w-full bg-white transition-all duration-500 ease-out 
    ${Scrolled ? "h-24 shadow-xl" : "h-36 shadow-md"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`transition-all duration-500 ease-in-out ${
              Scrolled ? "w-12 h-12 transform scale-90" : "w-16 h-16"
            }`}
          />
          <h1
            className={`transition-all text-nowrap duration-500 ease-in-out bg-clip-text text-transparent pt-2 ${
              Scrolled ? "text-base" : "text-xl"
            } logo`}
          >
            شباب قادرون
          </h1>
        </div>
      </div>

      {/* Navigation Link Section */}
      <div className="hidden lg:flex justify-center items-center space-x-5 font-black text-lg z-50">
        <ul className="flex space-x-10">
          {/* "من نحن" Dropdown */}
          <li className="relative group z-50">
            <button
              className="cursor-pointer hover:text-[#262e30] text-primary flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              من نحن
              <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
            </button>

            <ul className="absolute top-full rounded-2xl text-base right-0 z-50 block space-y-2 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
              {[
                "عن الكيان",
                "كلمة رئيس الكيان",
                "اللجان",
                "الهيئة العليا",
                "شركاء النجاح",
              ].map((item, index) => (
                <li key={index} className="border-b text-gray-200 pt-2 pb-4">
                  <button className="cursor-pointer hover:text-[#262e30] text-secondary font-bold flex items-center">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* "خدماتنا" Dropdown */}
          <li className="relative group z-50">
            <button
              className="cursor-pointer hover:text-[#262e30] text-primary flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              خدماتنا
              <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
            </button>

            <ul className="absolute top-full rounded-2xl text-base right-0 z-50 block space-y-2 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
              {[
                "الاستشارات والدراسات",
                "التدريب",
                "الدورات التدريبية",
                "التحقق من الشهادات",
                "المؤتمرات",
                "الرحلات والمصايف",
              ].map((item, index) => (
                <li key={index} className="border-b text-gray-200 pt-2 pb-4">
                  <button className="cursor-pointer hover:text-[#262e30] text-secondary font-bold flex items-center">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li className="z-50">
            <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              الأخبار
            </button>
          </li>

          <li className="z-50">
            <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              المقالات
            </button>
          </li>

          <li className="z-50">
            <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              تواصل معنا
            </button>
          </li>

          <li className="z-50">
            <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              إنضم إلينا
            </button>
          </li>
        </ul>
      </div>

      {/* Social Media Links Container */}
      <div className="group flex flex-wrap justify-center items-center space-x-4 text-2xl gap-2 md:space-x-6 lg:space-x-8 z-50 relative">
        <button className="flex justify-center items-center h-14 w-14 rounded-full bg-[#262e30]/80 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110">
          <FaPhoneAlt className="text-white text-xl transition-all duration-300 ease-in-out" />
        </button>

        <div
          dir="ltr"
          className="absolute top-full mt-4 rounded-bl-2xl rounded-br-2xl left-0 z-50 block space-y-4 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500"
        >
          <a
            href="https://www.linkedin.com/company/qaderoon492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/qaderoon492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-700"
          >
            <FaXTwitter />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.youtube.com/@qaderoon492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-red-600 hover:text-red-800"
          >
            <FaYoutube />
            <span>YouTube</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=201000820029&app=facebook&entry_point=page_cta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-600 hover:text-green-800"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/qaderoon492/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-800"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/qaderoon492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-700 hover:text-blue-900"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Mobile Hamburger Menu for small screens */}
      <div className="lg:hidden flex items-center space-x-4 text-2xl z-50"></div>
    </div>
  );
}

export default Navbar;
