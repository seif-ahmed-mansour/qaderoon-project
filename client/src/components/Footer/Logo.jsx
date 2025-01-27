import { ORG_NAME } from "../../lib/constants";

export const Logo = () => (
  <a
    rel="noopener noreferrer"
    href="/"
    className="flex justify-center space-x-6">
    <span className="self-center text-3xl pt-5 text-primary logo">
      {ORG_NAME}
    </span>

    <div className="flex items-center justify-center size-16 rounded-full bg-default-400">
      <img
        src="/public/images/logo.jpg"
        alt="Qaderoon Logo"
      />
    </div>
  </a>
);

export default Logo;
