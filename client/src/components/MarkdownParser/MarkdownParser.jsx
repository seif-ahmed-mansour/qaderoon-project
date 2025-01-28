import "./MarkdownParser.css";
import { md } from "../../lib/markdown";

const MarkdownParser = ({ content }) => {
  const renderedContent = md.render(content);

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

export default MarkdownParser;
