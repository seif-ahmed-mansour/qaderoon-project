import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { ORG_NAME } from "../../lib/constants";
import { FaXTwitter } from "react-icons/fa6";

// SocialIcon.jsx
const SocialIcon = ({ platform, href, children }) => (
  <a
    rel="noopener noreferrer"
    href={href}
    title={platform}
    className="flex items-center p-1">
    {children}
  </a>
);

// FooterSection.jsx
const FooterSection = ({ title, links }) => (
  <div className="space-y-3">
    <h3 className="tracking-wide uppercase text-gray-50">{title}</h3>
    <ul className="space-y-1">
      {links.map((link, index) => (
        <li key={index}>
          <a
            rel="noopener noreferrer"
            href={link.href}
            className="hover:text-gray-300">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Logo.jsx
const Logo = () => (
  <a
    rel="noopener noreferrer"
    href="/"
    className="flex justify-center space-x-3 lg:justify-start">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-default-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
      </svg>
    </div>
    <span className="self-center text-2xl font-semibold">{ORG_NAME}</span>
  </a>
);

// Footer.jsx

// Usage example
const Footer = () => {
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/company/qaderoon492",
    twitter: "https://x.com/qaderoon492",
    youtube: "https://www.youtube.com/@qaderoon492",
    whatsapp: "https://web.whatsapp.com/send/?phone=201000820029",
    instagram: "https://www.instagram.com/qaderoon492/",
    facebook: "https://www.facebook.com/qaderoon492",
  };
  const footerData = {
    sections: [
      {
        title: "Product",
        links: [
          { href: "#", label: "Features" },
          { href: "#", label: "Integrations" },
          { href: "#", label: "Pricing" },
          { href: "#", label: "FAQ" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "#", label: "Privacy" },
          { href: "#", label: "Terms of Service" },
        ],
      },
      {
        title: "Developers",
        links: [
          { href: "#", label: "Public API" },
          { href: "#", label: "Documentation" },
          { href: "#", label: "Guides" },
        ],
      },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        href: socialMediaLinks.facebook,
        icon: <FaFacebook />,
      },
      {
        platform: "Twitter",
        href: socialMediaLinks.twitter,
        icon: <FaXTwitter />,
      },
      {
        platform: "Instagram",
        href: socialMediaLinks.instagram,
        icon: <FaInstagram />,
      },
      {
        platform: "LinkedIn",
        href: socialMediaLinks.linkedin,
        icon: <FaLinkedin />,
      },
      {
        platform: "WhatsApp",
        href: socialMediaLinks.whatsapp,
        icon: <FaWhatsapp />,
      },
      {
        platform: "Youtube",
        href: socialMediaLinks.youtube,
        icon: <FaYoutube />,
      },
    ],
    copyright: "© 1968 Company Co. All rights reserved.",
  };

  return (
    <>
      <footer className="px-4 divide-y bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            {footerData.sections.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}

            <div className="space-y-3">
              <div className="uppercase text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                {footerData.socialLinks.map((social, index) => (
                  <SocialIcon
                    key={index}
                    platform={social.platform}
                    href={social.href}>
                    {social.icon}
                  </SocialIcon>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <Logo />
          </div>
        </div>

        <div className="py-6 text-sm text-center text-gray-400">
          {footerData.copyright}
        </div>
      </footer>
    </>
  );
};

export default Footer;
