import { Link } from "react-router-dom";

const FooterSection = ({ label, link, subItems }) => (
  <div className="space-y-3">
    <Link className="font-bold text-gray-900 tracking-wide uppercas text-lg hover:text-primary transition-colors duration-300" to={link}>
      {label}
    </Link>
    <ul className="mt-6 space-y-4 text-md">
      {subItems.map((item, index) => (
        <li key={index}>
          <Link
            rel="noopener noreferrer"
            to={item.link}
            className="hover:-translate-x-3 transform block transition-transform duration-200 font-medium">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
