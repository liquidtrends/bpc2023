import React from "react";
import Articles from "../components/articles";
import OtherCards from "../components/otherCards";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <div className="">
        <div className="bg-[url('/home-header.png')] h-[500px] bg-no-repeat bg-center bg-cover md:bg-cover md:h-[500px] flex flex-col items-center justify-center">
        </div>

        <div className="h-[400px] flex flex-col items-center justify-center bg-center bg-cover bg-[url('/block-header.png')]">
          <h1 className="text-5xl text-yellow-50 uppercase font-bold">{homepage.attributes.hero.title}</h1>
          <p className="text-2xl w-1/2 pt-8 text-center text-white">BearPaw U is on a Legal Education Mission to make online learning as fun, rewarding, and fast as possible! Earn BearBucks for each completed course and swap 'em for some sweet SWAG!</p>
        </div>

        <div className="relative">
          <div className="">
            <Articles articles={articles} />
            <OtherCards />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image"] }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
