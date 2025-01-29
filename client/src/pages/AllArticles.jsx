import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../utils/Card/Card";
import { Link } from "react-router-dom";

function AllArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}reports`
        );
        // console.dir("🚀 ~ fetchData ~ response:", response.data.data);

        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.dir("🚀 ~ AllArticles ~ articles:", articles);
  return (
    <div className="py-11 pb-16">
      <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mx-auto">
        اخر <span className="text-primary relative top-1">المقالات</span>
      </h2>
      <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center cards-containerr mt-16">
        {articles &&
          articles.map(({ _id, reportTitle, reportImg }) => (
            <Link
              key={_id}
              to={`/article/${_id}`}>
              <Card
                description={reportTitle}
                image={`${import.meta.env.VITE_HOST_SERVER}imgs/` + reportImg}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default AllArticles;
