import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticles = articles.slice(0);
  const rightArticles = articles.slice(1);

  return (
    <div>
      <div>
        <div className="border-4 border-solid border-red">
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
              />
            );
          })}
        </div>
        <div>
          <div className="">
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
