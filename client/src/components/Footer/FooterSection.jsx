import { Link } from "react-router-dom";

const FooterSection = ({ title, links }) => (
  <div className="space-y-3">
    <h3 className="font-bold text-gray-900 tracking-wide uppercas text-lg">
      {title}
    </h3>
    <ul className="mt-6 space-y-4 text-md">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            rel="noopener noreferrer"
            to={link.href}
            className="hover:-translate-x-3 transform block transition-transform duration-200 font-medium">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
