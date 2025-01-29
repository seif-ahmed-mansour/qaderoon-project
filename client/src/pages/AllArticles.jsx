import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../utils/Card/Card";

function AllArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}reports`
        );
        // console.log(response);

        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log(articles);

    fetchData();
  }, []);
  return (
    <div>
      <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb- container my-11 mx-auto ">
        اخر <span className="text-primary relative top-1">المقالات</span>
      </h2>
      <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center cards-containerr">
        {articles &&
          articles.map((article, index) => (
            <Card
              key={index}
              description={article.reportTitle}
              image={
                `${import.meta.env.VITE_HOST_SERVER}imgs/` + article.reportImg
              }
            />
          ))}
      </div>
    </div>
  );
}

export default AllArticles;
