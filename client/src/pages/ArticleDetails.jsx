import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownParser from "../components/MarkdownParser/MarkdownParser";
import articleTemp from "../data/article-temp";
import { isEmptyObject } from "../lib/utils";

function ArticleDetails() {
  const test = articleTemp[1];
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}reports/${id}`
        );
        // console.log("🚀 ~ fetchData ~ response:", response.data.data);
        setArticle(response.data.data);
        setArticle(test);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id, test]);

  console.log(article);

  return (
    <div className="max-w-screen-xl mx-auto pb-10">
      {!isEmptyObject(article) && (
        <main className="md:mt-10 mt-0">
          {/* Hero Section */}
          <div className="mb-4 md:mb-0 w-full lg:max-w-screen-lg max-w-screen mx-auto relative h-full aspect-video hover:scale-105 transition-transform duration-500 cursor-default">
            <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black" />
            <img
              src={
                article.image
                  ? `${import.meta.env.VITE_HOST_SERVER}imgs/${article.image}`
                  : ""
              }
              className="absolute left-0 top-0 w-full h-full z-0 object-cover bg-black"
              alt={article.title}
            />

            {/* Article Header */}
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="md:text-4xl text-lg font-semibold text-white leading-tight">
                {article.title}
              </h2>

              {/* Author Info */}
              <div className="flex mt-3">
                <div className="ml-3 w-full">
                  <p className="font-semibold text-gray-200  text-base md:text-lg mb-3">
                    <span>بقلم </span>
                    {article.author.name}
                  </p>
                  <pre className="font-semibold text-gray-200 w-full text-sm md:text-base">
                    {article.author.title}
                  </pre>
                </div>
                <img
                  src={
                    article.author?.image
                      ? `${import.meta.env.VITE_HOST_SERVER}imgs/${
                          article.author?.image
                        }`
                      : `/images/profile.png`
                  }
                  className="md:size-24 size-16 rounded-full object-cover"
                  alt={article.author.name}
                />
              </div>

              {/* Date */}
              <p className="mt-2 font-semibold text-white text-sm">
                نشر في {new Date(article.createdAt).toLocaleDateString("Ar-eg")}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-4 lg:px-0 mt-12 pb-12 text-gray-700 lg:max-w-screen-lg w-full mx-auto text-lg">
            <div className="md:text-justify">
              <MarkdownParser content={article.content} />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default ArticleDetails;
