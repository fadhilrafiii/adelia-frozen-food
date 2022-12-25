import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import React, { useMemo } from 'react';

import { GetStaticPropsContext } from 'next';
import RelatedNews from 'sections/news/related-news';

import { NEWS } from 'shared/constants/news';
import { News } from 'shared/types/news';
import { isImageContent } from 'shared/utils/news';

interface NewsDetailProps {
  news: News;
}

const NewsDetail = ({ news }: NewsDetailProps) => {
  const relatedNews = useMemo(
    () => NEWS.filter((n: News) => n.title !== news.title),
    [news],
  );

  const generateNewsContent = (content: string | StaticImageData) => {
    if (isImageContent(content))
      return (
        <Image
          src={content}
          fill
          sizes="70vw"
          alt={news.title}
          placeholder="blur"
        />
      );

    return (
      <p className="mb-5 lg:mb-9 text-[10px] md:text-sm lg:text-[18px] text-justify text-dark-grey !leading-normal">
        {content}
      </p>
    );
  };

  return (
    <>
      <Head>
        <title>{`${news.title} | Adelia Frozen Food`}</title>
        <meta name="description" content={news.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section
          id={news.title}
          className="px-4 sm:px-8 md:px-12 lg:px-14 pb-14 pt-8 md:pb-12 md:pt-24 max-w-[1096px] mx-auto"
        >
          <div className="relative w-full aspect-[14/11] mb-7 lg:mb-9 rounded-[10px] lg:rounded-[20px] overflow-hidden">
            <Image
              src={news.image}
              fill
              sizes="70vw"
              alt={news.title}
              className="object-cover"
              quality={100}
              priority
            />
          </div>
          <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-dark-grey mb-3 capitalize">
            {news.title}
          </h1>
          {news.date && (
            <span className="inline-block text-[10px] md:text-sm lg:text-[18px] opacity-75 mb-6 lg:mb-9">
              {news.date}
            </span>
          )}
          {news.content && typeof news.content !== 'string'
            ? news.content.map(
                (content: string | StaticImageData, idx: number) => (
                  <div key={idx}>{generateNewsContent(content)}</div>
                ),
              )
            : generateNewsContent(news.content || '')}
        </section>
        <RelatedNews newsList={relatedNews} />
      </div>
    </>
  );
};

export const getStaticPaths = () => {
  const paths = NEWS.map((news: News) => ({
    params: { title: news.title },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  return {
    props: {
      news: NEWS.find((news: News) =>
        ctx.params ? news.title === ctx.params['title'] : '',
      ),
    },
  };
};

export default NewsDetail;
