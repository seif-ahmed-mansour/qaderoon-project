import { Link } from "react-router-dom";
import { ORG_NAME } from "../../lib/constants";

export const Logo = () => (
  <Link to="/" rel="noopener noreferrer" href="/" className="flex justify-center space-x-6 select-none">
    <span className="self-center text-3xl pt-5 text-primary logo">{ORG_NAME}</span>

    <div className="flex items-center justify-center size-16 rounded-full bg-default-400">
      <img src="/images/logo.png" alt="Qaderoon Logo" />
    </div>
  </Link>
);

export default Logo;
