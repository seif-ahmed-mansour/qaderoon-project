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
  const [NavMenu, setNavMenu] = useState(false);
  const [Navitem, setNavitem] = useState(false);

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
      className={`navbar flex justify-between px-6 py-2 md:px-16 md:py-4 xl:px-24 xl:py-6 sticky top-0 z-50 w-full bg-white transition-all duration-500 ease-out 
    ${Scrolled ? "md:h-24 shadow-md" : "md:h-30 shadow-sm"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`transition-transform duration-300 md:opacity-100  ${
              Scrolled
                ? "w-14 h-14 md:w-12 md:h-12 transform scale-90 opacity-85"
                : "w-10 h-10 md:w-16 md:h-16 transform scale-100 opacity-100"
            }`}
          />
          <h1
            className={`logo md:opacity-100 md:scale-100 md:max-h-[100px] transition-all duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] bg-clip-text text-transparent pt-2 
      ${
        Scrolled
          ? "opacity-0 scale-90 max-h-0 overflow-hidden md:text-base"
          : "opacity-100 scale-100 max-h-[100px] text-base md:text-xl"
      } `}
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
      <div className="group hidden lg:flex justify-center items-center text-2xl gap-2 z-50 relative">
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

      {/* Mobile Nav */}
      <div className="lg:hidden flex flex-col justify-center items-center z-50 cursor-pointer">
        <div onClick={() => setNavMenu(!NavMenu)} className="space-y-1">
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out
         ${NavMenu ? "translate-y-2 rotate-45" : ""}`}
          ></div>
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out 
        ${NavMenu ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out 
        ${NavMenu ? "-translate-y-2 -rotate-45" : ""}`}
          ></div>
        </div>

        {/* Mobile Menu with Navigation Links */}
        <div
          className={`absolute top-full right-0 px-5 w-screen bg-white shadow-lg flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-in-out 
          ${NavMenu ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}`}
        >
          <ul className="w-full space-y-2">
            {/* "من نحن" Dropdown */}
            <li className="relative group z-50">
              <button
                className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between"
                onClick={() => setNavitem(!Navitem)}
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
                  <li key={index} className="border-b text-gray-200 py-2">
                    <a className="cursor-pointer hover:text-[#262e30] text-secondary text-sm flex items-center">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* "خدماتنا" Dropdown */}
            <div className="relative group w-full">
              <button
                className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between"
                onClick={() => setNavitem(!Navitem)}
              >
                خدماتنا
                <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
              </button>

              <ul
                className={`text-base bg-white w-full px-6 transition-all duration-[400ms]
                ${
                  Navitem
                    ? "opacity-100 max-h-[700px] pb-4 pt-6"
                    : "opacity-0 max-h-0"
                }
              `}
              >
                {[
                  "الاستشارات والدراسات",
                  "التدريب",
                  "الدورات التدريبية",
                  "التحقق من الشهادات",
                  "المؤتمرات",
                  "الرحلات والمصايف",
                ].map((item, index) => (
                  <li key={index} className="border-b text-gray-200 py-2">
                    <a className="cursor-pointer hover:text-[#262e30] text-secondary text-sm flex items-center">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <li className="z-50">
              <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between">
                الأخبار
              </button>
            </li>
            <li className="z-50">
              <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between">
                المقالات
              </button>
            </li>
            <li className="z-50">
              <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between">
                تواصل معنا
              </button>
            </li>
            <li className="z-50">
              <button className="cursor-pointer hover:text-[#262e30] text-primary flex items-center w-full justify-between">
                إنضم إلينا
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
