const SocialIcon = ({ platform, href, color, children }) => (
  <>
    <li
      className="f-icon"
      style={{ "--color": color }}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        title={platform}>
        <span className="sr-only">{platform}</span>
        {children}
      </a>
    </li>
  </>
);

export default SocialIcon;
