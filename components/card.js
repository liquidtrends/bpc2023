import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`} legacyBehavior>
      <a>
      <div id="card" className="">
          <div className="container w-1/2 lg:w-1/2 mx-auto flex flex-col">
            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden w-100">
              <div className="pt-8 md:w-96 object-bottom">
                <NextImage image={article.attributes.image} className="object-bottom"/>
              </div>
              <div className="w-full py-4 px-6 text-white flex flex-col justify-center space-y-8">
                <h3 className="font-semibold text-3xl leading-tight truncate text-white uppercase">{article.attributes.title}</h3>
                <p className="mt-1 text-xl">
                  {article.attributes.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
