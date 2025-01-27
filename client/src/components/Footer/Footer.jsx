import "./Footer.css";
import FooterSection from "./FooterSection";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const footerData = {
  sections: [
    {
      title: "من نحن",
      links: [
        { href: "#", label: "عن الكيان" },
        { href: "#", label: "كلمة رئيس الكيان" },
        { href: "#", label: "اللجان" },
        { href: "#", label: "الهيئة العليا" },
        { href: "#", label: "شركاء النجاح" },
      ],
    },
    {
      title: "خدماتنا",
      links: [
        { href: "#", label: "الاستشارات والدراسات" },
        { href: "#", label: "التدريب" },
        { href: "#", label: "الدورات التدريبية" },
        { href: "#", label: "التحقق من الشهادات" },
        { href: "#", label: "المؤتمرات" },
        { href: "#", label: "الرحلات والمصايف" },
      ],
    },

    {
      title: "الأخبار",
      links: [{ href: "#", label: "" }],
    },

    {
      title: "المقالات",
      links: [{ href: "#", label: "" }],
    },

    {
      title: "تواصل معنا",
      links: [{ href: "#", label: "" }],
    },

    {
      title: "إنضم إلينا",
      links: [{ href: "#", label: "" }],
    },
  ],

  copyright: "© 2025 Qaderoon Co. All rights reserved.",
};

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between f-social-links">
            <Logo />
            <SocialLinks />
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 xl:grid-cols-6">
          {footerData &&
              footerData.sections.map(({ links, title }) => (
                <FooterSection key={title} title={title} links={links} />
              ))}
          </div>

          <p className="py-4 text-sm text-center text-gray-400" dir="ltr">
            {footerData.copyright}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
