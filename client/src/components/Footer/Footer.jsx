import "./Footer.css";
import FooterSection from "./FooterSection";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const footerData = {
  sections: [
    {
      title: "من نحن",
      links: [
        { href: "/about/institution", label: "عن المؤسسة" },
        { href: "/about/speech", label: "كلمة رئيس المؤسسة" },
        { href: "/about/board", label: "مجلس الأمناء" },
        { href: "/about/supreme-advisory", label: "الهيئة العليا والاستشارية" },
        { href: "/about/offices", label: "المكاتب" },
        { href: "/about/units", label: "الإدارات والوحدات" },
        { href: "/about/governorates", label: "المحافظات" },
        { href: "/about/success-partners", label: "شركاء النجاح" },
      ],
    },
    {
      title: "خدماتنا",
      links: [
        { href: "/services/consulting", label: "الاستشارات والدراسات" },
        { href: "/services/training", label: "التدريب" },
        { href: "/services/courses", label: "الدورات التدريبية" },
        { href: "/services/certification", label: "التحقق من الشهادات" },
        { href: "/services/conferences", label: "المؤتمرات" },
        { href: "/services/trips", label: "الرحلات والمصايف" },
      ],
    },
    { title: "الأخبار", links: [{ href: "/news", label: "الأخبار" }] },
    { title: "المقالات", links: [{ href: "/articles", label: "المقالات" }] },
    { title: "تواصل معنا", links: [{ href: "/contact", label: "تواصل معنا" }] },
    { title: "إنضم إلينا", links: [{ href: "/join-us", label: "إنضم إلينا" }] },
  ],

  copyright: "© 2025 Qaderoon Co. All rights reserved.",
};

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-12 pb-6 sm:px-6 lg:space-y-16 lg:px-8">
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
