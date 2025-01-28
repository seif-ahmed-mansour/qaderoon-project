import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import SocialMediaLinks from "./SocialMediaLinks";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const navItemsData = [
  {
    name: "من نحن",
    link: "/about",
    subItems: [
      { name: "عن المؤسسة", link: "/about/institution" },
      { name: "كلمة رئيس المؤسسة", link: "/about/speech" },
      { name: "مجلس الأمناء", link: "/about/board" },
      { name: "الهيئة العليا والاستشارية", link: "/about/supreme-advisory" },
      { name: "المكاتب", link: "/about/offices" },
      { name: "الإدارات والوحدات", link: "/about/units" },
      { name: "المحافظات", link: "/about/governorates" },
      { name: "شركاء النجاح", link: "/about/success-partners" },
    ],
  },
  {
    name: "خدماتنا",
    link: "/services",
    subItems: [
      { name: "الاستشارات والدراسات", link: "/services/consulting" },
      { name: "التدريب", link: "/services/training" },
      { name: "الدورات التدريبية", link: "/services/courses" },
      { name: "التحقق من الشهادات", link: "/services/certification" },
      { name: "المؤتمرات", link: "/services/conferences" },
      { name: "الرحلات والمصايف", link: "/services/trips" },
    ],
  },
  { name: "الأخبار", link: "/news" },
  { name: "المقالات", link: "/articles" },
  { name: "تواصل معنا", link: "/contact" },
  { name: "إنضم إلينا", link: "/join-us" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <div
      className={`navbar flex justify-between px-6 py-2 md:px-16 md:py-4 xl:px-24 xl:py-6 sticky top-0 z-50 w-full bg-white transition-all duration-500 ease-out 
      ${scrolled ? "md:h-24 shadow-md" : "md:h-30 shadow-sm"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center z-50">
        <Link to={"/"} className="flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`transition-transform duration-300 md:opacity-100  ${
              scrolled
                ? "w-14 h-14 md:w-12 md:h-12 transform scale-90 opacity-85"
                : "w-10 h-10 md:w-16 md:h-16 transform scale-100 opacity-100"
            }`}
          />
          <h1
            className={`logo md:opacity-100 md:scale-100 md:max-h-[100px] transition-all duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] bg-clip-text text-transparent pt-2 
              ${
                scrolled
                  ? "opacity-0 scale-90 max-h-0 overflow-hidden md:text-base"
                  : "opacity-100 scale-100 max-h-[100px] text-base md:text-xl"
              }`}
          >
            شباب قادرون
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center items-center space-x-5 font-black text-lg z-50">
        <ul className="flex space-x-10">
          {navItemsData.map((item, index) => (
            <li key={index} className="relative group z-50">
              <Link
                to={item.link}
                className="hover:text-[#262e30] text-primary flex items-center"
              >
                {item.name}
                {item.subItems && (
                  <FaCaretDown className="mr-2 mt-1 transition-all duration-400 group-hover:rotate-90" />
                )}
              </Link>
              {item.subItems && <Dropdown subItems={item.subItems} />}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Mobile Nav */}
      <div className="lg:hidden flex flex-col justify-center items-center z-50 cursor-pointer">
        <div onClick={() => setNavMenuOpen(!navMenuOpen)} className="space-y-1">
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out
              ${navMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          ></div>
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out
              ${navMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-10 h-1 bg-[#262e30]/90 rounded-full transition-all duration-300 ease-in-out
              ${navMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-0 px-5 w-screen bg-white shadow-lg flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
            navMenuOpen ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"
          }`}
        >
          <ul className="w-full space-y-3">
            {navItemsData.map((item, index) => (
              <div key={index} className="relative group w-full">
                <button
                  className="cursor-pointer hover:text-primary text-[#262e30] text-lg flex items-center w-full justify-between"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  {item.subItems && (
                    <FaCaretDown
                      className={`mr-2 mt-1 transition-transform duration-400 ${
                        openDropdown === item.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>
                {item.subItems && (
                  <ul
                    className={`text-base bg-white w-full px-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
                      openDropdown === item.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    style={{
                      transitionProperty: "max-height, opacity",
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        key={subIndex}
                        className="border-b text-gray-200"
                      >
                        <h1 className="cursor-pointer hover:text-secondary text-[#414e52] text-base flex items-center mt-2">
                          {subItem.name}
                        </h1>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
