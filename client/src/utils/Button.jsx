import { Link } from "react-router-dom";

function Button({ link, children, className = "", ...rest }) {
  const buttonClasses = `inline-flex items-center text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none transition duration-150 card-button ${className} px-5 py-3 my-2`;

  // If a link is provided, render as a Link
  if (link) {
    return (
      <Link to={link} className={buttonClasses} {...rest}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
