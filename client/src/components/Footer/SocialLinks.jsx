import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/qaderoon492",
    icon: <FaFacebookF />,
    color: "#3B5999",
  },
  {
    platform: "X",
    href: "https://x.com/qaderoon492",
    icon: <FaXTwitter />,
    color: "#000",
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/qaderoon492/",
    icon: <FaInstagram />,
    color: "#E1308B",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/qaderoon492",
    icon: <FaLinkedin />,
    color: "#0077B5",
  },
  {
    platform: "WhatsApp",
    href: "https://web.whatsapp.com/send/?phone=201000820029",
    icon: <FaWhatsapp />,
    color: "#25D366",
  },
  {
    platform: "Youtube",
    href: "https://www.youtube.com/@qaderoon492",
    icon: <FaYoutube />,
    color: "#DE463B",
  },
];

const SocialLinks = () => {
  return (
    <>
      <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
        {links.map((link, index) => (
          <SocialIcon
            key={index}
            platform={link.platform}
            href={link.href}
            color={link.color}>
            {link.icon}
          </SocialIcon>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
