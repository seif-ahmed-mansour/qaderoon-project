import React from "react";
import "./articles.css";
import Card from "../../../utils/Card/Card";
import Button from "../../../utils/Button";

function Articles() {
  const data = [
    {
      image: "/images/articles-init-photo.png", // Add your image URL here
      description:
        "مقال رأي يتناول موضوع التكنولوجيا وتأثيرها على المجتمع. يناقش كيفية التقدم التكنولوجي وتحدياته.",
    },
    {
      image: "/images/logo_with_slogan.jpg", // Add your image URL here
      description:
        "مقال رأي حول التعليم عن بُعد. يتحدث عن الفوائد والعيوب المرتبطة بالتعلم عبر الإنترنت.",
    },
    {
      image: "/images/home-about-section-photo.png", // Add your image URL here
      description:
        "مقال رأي عن التغير المناخي. يركز على أهمية الوعي البيئي وسبل الحد من التلوث.",
    },
  ];
  return (
    <div className="articles-cont">
      <div className="layer"></div>
      <div className="container mx-auto px-4 text-center article-content">
        <h1 className="text-6xl my-3 text-white">مقالات الرأي</h1>
        <p className="text-3xl my-5 text-white">
          مجموعة من المقالات المحدثة باستمرار
        </p>
        <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center">
          {data.map((article, index) => (
            <Card
              key={index}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
        <Button>عرض المزيد
        </Button>
      </div>
    </div>
  );
}

export default Articles;
