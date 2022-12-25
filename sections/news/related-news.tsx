import { useRouter } from 'next/router';

import NewsCard from 'components/news-card';

import { News } from 'shared/types/news';

interface RelatedNewsProps {
  newsList: News[];
}

const RelatedNews = ({ newsList }: RelatedNewsProps) => {
  const router = useRouter();

  return (
    <section
      id="berita-terkait-adelia-frozen-food"
      className="px-4 sm:px-8 pt-5 lg:pt-8 pb-14 md:pb-24"
    >
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Berita Terkait
      </h2>
      <div className="flex flex-wrap justify-center -mx-5 lg:-mx-10 px-5 lg:px-14">
        {newsList.map((news: News, idx: number) => (
          <div
            key={idx}
            className="basis-1/3 p-[10px] lg:p-5 min-w-[260px] lg:min-w-[320px]"
          >
            <NewsCard news={news} onClick={() => router.push(news.href)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedNews;
