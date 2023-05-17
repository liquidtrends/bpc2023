import React from "react";
import Link from "next/link";
import { fetchAPI } from "../lib/api";


const Hero = ({ article }) => {


  return (
    <div className="relative">
      <div className="bg-[url('/landing-header.svg')] h-[500px] bg-bottom bg-no-repeat bg-contain mb-8 md:bg-contain md:h-[500px] flex flex-col items-center justify-center">
        <h1 className="text-5xl text-red-800 uppercase font-bold"></h1>
        <p className="text-2xl w-1/2 pt-8 text-center"></p>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["title"],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Hero;
