import { useEffect } from "react";
import "./articles.css";
import Card from "../../../utils/Card/Card";
import Button from "../../../utils/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Articles() {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
    {
      image: "/images/articles-init-photo.png", // Add your image URL here
      title: "مقال رأي يتناول موضوع التكنولوجيا وتأثيرها على المجتمع. يناقش كيفية التقدم التكنولوجي وتحدياته.",
    },
    {
      image: "/images/logo_with_slogan.jpg", // Add your image URL here
      title: "مقال رأي حول التعليم عن بُعد. يتحدث عن الفوائد والعيوب المرتبطة بالتعلم عبر الإنترنت.",
    },
    {
      image: "./public/images/home-artical section-photo.jpg", // Add your image URL here
      title: "مقال رأي عن التغير المناخي. يركز على أهمية الوعي البيئي وسبل الحد من التلوث.",
    },
  ];
  return (
    <div className="articles-cont">
      <div className="layer"></div>
      <div className="container mx-auto px-4 text-center article-content" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-4xl font-bold my-3 text-white">مقالات الرأي</h1>
        <p className="text-xl my-5 text-white">مجموعة من المقالات المحدثة باستمرار</p>
        <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center cards-containerr">
          {data.map((article, index) => (
            <Card key={index} description={article.title} image={article.image} />
          ))}
        </div>
        <Button className="bg-white !text-primary hover:bg-white hover:scale-105 transition-transform duration-200">عرض المزيد</Button>
      </div>
    </div>
  );
}

export default Articles;
