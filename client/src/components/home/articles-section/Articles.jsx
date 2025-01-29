import { useEffect, useState } from "react";
import "./articles.css";
import Card from "../../../utils/Card/Card";
import Button from "../../../utils/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}articles/`
        );
        console.log(response);

        setArticles(response.data.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log(articles);

    fetchData();
  }, []);

  return (
    <div className="articles-cont">
      <div className="layer"></div>
      <div
        className="container mx-auto px-4 text-center article-content"
        data-aos="fade-down"
        data-aos-duration="1000">
        <h1 className="text-3xl md:text-4xl font-bold my-3 text-white">
          مقالات الرأي
        </h1>
        <p className="text-xl my-5 text-white">
          مجموعة من المقالات المحدثة باستمرار
        </p>
        <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center sm-justify-center">
          {articles &&
            articles.map(({ _id, title, Img }) => (
              <Link
                to={`/article/${_id}`}
                key={_id}>
                <Card
                  description={title}
                  image={`${import.meta.env.VITE_HOST_SERVER}imgs/${Img}`}
                />
              </Link>
            ))}
        </div>
        <Button
          className="bg-white !text-primary hover:bg-white hover:scale-105 transition-transform duration-200 font-semibold"
          link="/articles">
          عرض المزيد
        </Button>
      </div>
    </div>
  );
}

export default Articles;
