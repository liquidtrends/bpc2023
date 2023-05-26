import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ProgressIndicator from "../../components/progressIndicator";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Quiz from "../../components/quiz";

const Article = ({ article }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);
  const audioFileUrl = getStrapiMedia(article.attributes.audioFile);
  const headerImageUrl = getStrapiMedia(article.attributes.HeaderImage);

  console.log({article})

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  const getAllQuiz = () => {
    return article.attributes.contentBlocks.filter((block) => block.Question);
  };

  return (
    <Layout>
    <ProgressIndicator />
    <Seo seo={seo} />
      <div className="">
        <div className="h-[500px] bg-no-repeat bg-top bg-cover md:bg-cover md:h-[500px] flex flex-col items-center justify-center" style={{backgroundImage: `url(${headerImageUrl})`}}>
          <h1 className="text-5xl text-red-800 uppercase font-bold w-1/2 text-center">{article.attributes.title}</h1>
          <p className="text-2xl w-1/2 pt-8 text-center"></p>
        </div>
      </div>
      <div id="audioBox" className="w-full mx-auto p-2 flex grid-cols-2 gap-4 items-center justify-center bg-[#155A63]">
        <p className="text-white text-bold text-xl uppercase">Tired of reading? Tap play to listen instead.</p>
        {audioFileUrl && (
          <audio controls>
            <source src={audioFileUrl} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
      <div className="bg-[url('/block-header.png')] bg-no-repeat bg-center bg-cover">
        <div className="w-1/2 m-auto space-y-8 text-center py-20">
          <h1 className="text-5xl font-bold uppercase text-[#FFEFDC]">{article.attributes.title}</h1>
          <p className="text-white">{article.attributes.description}</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-1/2 mx-auto">
            <div className="my-12 space-y-8">
              <ReactMarkdown className="text-lg" children={article.attributes.content} />
              {article.attributes.contentBlocks &&
                article.attributes.contentBlocks.map((block, index) => (
                  <div key={index} className="my-12 space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {block.sectionTitle}
                    </h2>
                    {block.sectionImages && (
                      <img
                        className="pt-10 w-full"
                        src={getStrapiMedia(block.sectionImages)}
                      />
                    )}
                    <ReactMarkdown
                      className="contentBlock text-lg space-y-8"
                      children={block.sectionContent}
                    />
                    {block.sectionVideo && (
                      <div>
                        <video
                          className="pt-10 w-full"
                          controls
                          src={getStrapiMedia(block.sectionVideo)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              <Quiz quiz={getAllQuiz()} />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"]});

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: [
      "image",
      "audioFile",
      "HeaderImage",
      "contentBlocks",
      "contentBlocks.sectionVideo",
      "contentBlocks.sectionImages",
      "contentBlocks.Answers",
    ],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;
