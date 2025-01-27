import { Link } from "react-router-dom";

function Button({ link, children, className = "", ...rest }) {
  return (
    <Link
      to={link}
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none transition duration-150 card-button ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default Button;
