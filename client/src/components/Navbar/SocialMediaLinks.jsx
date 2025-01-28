import {
  FaPhoneAlt,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/qaderoon492",
    color: "text-blue-600 hover:text-blue-800",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "https://x.com/qaderoon492",
    color: "text-gray-900 hover:text-gray-700",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@qaderoon492",
    color: "text-red-600 hover:text-red-800",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=201000820029&app=facebook&entry_point=page_cta",
    color: "text-green-600 hover:text-green-800",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/qaderoon492/",
    color: "text-pink-600 hover:text-pink-800",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/qaderoon492",
    color: "text-blue-700 hover:text-blue-900",
  },
];

const SocialMediaLinks = () => (
  <div className="group hidden lg:flex justify-center items-center text-2xl gap-2 z-50 relative">
    <button className="flex justify-center items-center h-14 w-14 rounded-full bg-[#262e30]/80 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110">
      <FaPhoneAlt className="text-white text-xl transition-all duration-300 ease-in-out" />
    </button>
    <div
      dir="ltr"
      className="absolute top-full mt-4 rounded-bl-2xl rounded-br-2xl left-0 z-50 block space-y-4 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500"
    >
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 ${social.color}`}
        >
          {social.icon}
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default SocialMediaLinks;
