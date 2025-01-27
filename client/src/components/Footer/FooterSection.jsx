const FooterSection = ({ title, links }) => (
  <div className="space-y-3">
    <h3 className="font-bold text-gray-900 tracking-wide uppercas">{title}</h3>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a
            rel="noopener noreferrer"
            href={link.href}
            className="hover:-translate-x-3 transform block transition-transform duration-200 font-medium">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
