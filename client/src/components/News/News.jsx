import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../utils/Card/Card";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}news`
        );
        // console.log(response);

        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log(articles);

    fetchData();
  }, []);

  return (
    <>
      <section className="container my-11 mx-auto">
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 ev-title-sponsors text-neutral-950 mb-6">
          اخر <span className="text-primary relative top-1">الاخبار</span>
        </h2>

        <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center cards-containerr">
          {news &&
            news.map((article, index) => (
              <Card
                key={index}
                description={article.reportTitle}
                image={
                  `${import.meta.env.VITE_HOST_SERVER}imgs/` + article.newsImg
                }
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default News;
