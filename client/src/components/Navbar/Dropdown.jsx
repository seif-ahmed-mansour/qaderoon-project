import { Link } from "react-router-dom";

const Dropdown = ({ subItems, renderSubItems }) => (
  <ul className="absolute top-full shadow-xl rounded-2xl text-base right-0 z-50 space-y-2 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
    {subItems.map((subItem, index) => (
      <li key={index} className="border-b text-gray-200 pt-2 pb-4">
        <Link to={subItem.link} className="hover:text-[#262e30] text-secondary font-bold flex items-center">
          {subItem.name}
        </Link>
        {subItem.subItems && renderSubItems(subItem.subItems)}
      </li>
    ))}
  </ul>
);

export default Dropdown;
