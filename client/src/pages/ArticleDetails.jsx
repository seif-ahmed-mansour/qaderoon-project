import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownParser from "../components/MarkdownParser/MarkdownParser";
import Loader from "../utils/Loader/Loader";
import { isEmptyObject } from "../lib/utils";

function ArticleDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [article, setArticle] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}articles/${id}`
        );

        const authorRes = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}authors/${res.data.data.author}`
        );

        setArticle({ ...res.data.data, author: authorRes.data.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto pb-10">
      {isLoading || isEmptyObject(article) ? (
        <div className="w-full min-h-dvh grid place-items-center overflow-y-hidden">
          <Loader />
        </div>
      ) : (
        <main className="md:mt-10 mt-0">
          {/* Hero Section */}
          <div className="mb-4 md:mb-0 w-full lg:max-w-screen-lg max-w-screen mx-auto relative h-full aspect-video hover:scale-105 transition-transform duration-500 cursor-default">
            <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black" />
            <img
              src={
                article.Img
                  ? `${import.meta.env.VITE_HOST_SERVER}imgs/${article.Img}`
                  : ""
              }
              className="absolute left-0 top-0 w-full h-full z-0 object-cover bg-black"
              alt={article.title}
            />

            {/* Article Header */}
            <div className="p-4 absolute bottom-0 left-0 z-20 w-full">
              <h2 className="md:text-4xl text-lg font-semibold text-white leading-tight">
                {article.title}
              </h2>

              {/* Author Info */}
              <div className="flex mt-3">
                <div className="md:ml-3 ml-0 w-full flex justify-between items-center sm:block">
                  <p className="font-semibold text-gray-200 text-base md:text-lg mb-3">
                    <span>بقلم </span>
                    {article.author.name}
                  </p>
                  <pre className="font-semibold text-gray-200 w-full text-sm md:text-base hidden md:block">
                    {article.author.title}
                  </pre>
                  {/* Date */}
                  <p className="mt-2 font-semibold text-white text-sm w-fit justify-self-left sm:justify-self-auto">
                    نشر في{" "}
                    {new Date(article.createdAt).toLocaleDateString("Ar-eg")}
                  </p>
                </div>
                <img
                  src={
                    article.author?.image
                      ? `${import.meta.env.VITE_HOST_SERVER}imgs/${
                          article.author?.image
                        }`
                      : `/images/profile.png`
                  }
                  className="md:size-24 size-16 rounded-full object-cover hidden sm:block"
                  alt={article.author.name}
                />
              </div>
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
