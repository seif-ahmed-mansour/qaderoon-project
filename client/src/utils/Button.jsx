import { Link } from "react-router-dom";

function Button({ link, children, className = "", ...rest }) {
  const buttonClasses = `${className} flex items-center justify-between gap-3 w-fit text-lg font-semibold text-center text-white bg-primary hover:bg-secondary rounded-lg transition duration-300 card-button px-5 py-3 my-2 group`;

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
