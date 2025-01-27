import "./Footer.css";
import FooterSection from "./FooterSection";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

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

  copyright: "© 2025 Qaderoon Co. All rights reserved.",
};

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between f-social-links">
            <Logo />
            <SocialLinks />
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            {footerData &&
              footerData.sections.map(({ links, title }) => (
                <FooterSection
                  key={title}
                  title={title}
                  links={links}
                />
              ))}
          </div>

          <p
            className="pt-6 text-sm text-center text-gray-400"
            dir="ltr">
            {footerData.copyright}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
