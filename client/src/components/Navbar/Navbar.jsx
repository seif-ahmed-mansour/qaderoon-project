import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaCaretDown } from "react-icons/fa";

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
        ${Scrolled ? "h-24 shadow-2xl" : "h-36"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`transition-all duration-500 ease-in-out 
              ${Scrolled ? "w-12 h-12 transform scale-90" : "w-16 h-16"}`}
          />
          <h1
            className={`transition-all text-nowrap duration-500 ease-in-out bg-clip-text text-transparent pt-2 
              ${Scrolled ? "text-base" : "text-xl"} logo`}
          >
            شباب قادرون
          </h1>
        </div>
      </div>

      {/* Navigation Link Section */}
      <div className="hidden lg:flex justify-center items-center space-x-5 font-black text-lg">
        <ul className="flex space-x-10">
          {/* "من نحن" Dropdown */}
          <li className="relative group">
            <a
              className="cursor-pointer hover:text-[#262e30] text-primary flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              من نحن
              <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
            </a>

            <ul className="absolute top-full rounded-2xl text-base right-0 z-50 block space-y-2 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
              {[
                "عن الكيان",
                "كلمة رئيس الكيان",
                "اللجان",
                "الهيئة العليا",
                "شركاء النجاح",
              ].map((item, index) => (
                <li key={index} className="border-b text-gray-300 pt-2 pb-4">
                  <a className="cursor-pointer hover:text-[#262e30] text-secondary font-bold flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* "خدماتنا" Dropdown */}
          <li className="relative group">
            <a
              className="cursor-pointer hover:text-[#262e30] text-primary flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              خدماتنا
              <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
            </a>

            <ul className="absolute top-full rounded-2xl text-base right-0 z-50 block space-y-2 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
              {[
                "عن الكيان",
                "كلمة رئيس الكيان",
                "اللجان",
                "الهيئة العليا",
                "شركاء النجاح",
              ].map((item, index) => (
                <li key={index} className="border-b text-gray-300 pt-2 pb-4">
                  <a className="cursor-pointer hover:text-[#262e30] text-secondary font-bold flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              الأخبار
            </a>
          </li>

          <li>
            <a className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              المقالات
            </a>
          </li>

          <li>
            <a className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              تواصل معنا
            </a>
          </li>

          <li>
            <a className="cursor-pointer hover:text-[#262e30] text-primary flex items-center">
              إنضم إلينا
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Accounts Links Section */}
      <div className="flex flex-wrap justify-center items-center space-x-4 text-2xl gap-2 md:space-x-6 lg:space-x-8"></div>

      {/* Mobile Hamburger Menu for small screens */}
      <div className="lg:hidden flex items-center space-x-4 text-2xl"></div>
    </div>
  );
}

export default Navbar;
