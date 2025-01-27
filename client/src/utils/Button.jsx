import { Link } from "react-router-dom";

function Button({ link, children, className = "", ...rest }) {
  return (
    <Link
      to={link}
      className={`inline-flex items-center text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none transition duration-150 card-button ${className} px-5 py-3 my-2`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default Button;
