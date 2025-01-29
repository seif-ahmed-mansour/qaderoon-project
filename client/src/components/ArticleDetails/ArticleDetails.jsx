import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetails() {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}reports/${id}`
        );

        console.log(response);

        setArticle(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log(articles);

    fetchData();
  }, [id]);

  console.log(article);

  return (
    <>
      <div className="bg-gray-100 h-20">
        <h2 className="text-4xl p-5">{article && article.reportTitle}</h2>
      </div>
      <div className="text-center flex justify-center">
        <img
          src={`${import.meta.env.VITE_HOST_SERVER}imgs/` + article.reportImg}
          alt=""
          className=" h-100 object-cover as"
        />
      </div>
      <p className="text-2xl m-9">{article && article.reportDesc}</p>
    </>
  );
}

export default ArticleDetails;
