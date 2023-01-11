import Image from 'next/image';
import Link from 'next/link';

import { News } from 'shared/types/news';

import styles from './news-card.module.scss';

interface NewsCardProps {
  news: News;
  onClick?: () => void;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link
      href={`/berita/${news.title}`}
      className={
        'inline-block relative mx-auto bg-white rounded-[12px] md:rounded-[25px] !h-full ' +
        styles.newsCardShadow
      }
    >
      <div className="overflow-hidden aspect-[6/5] relative">
        <Image
          src={news.image}
          alt={news.title}
          sizes="(max-width: 767px) 220px, 413px"
          fill
          className="objext-cover h-full"
          placeholder="blur"
          quality={100}
        />
      </div>
      <div className="p-[14px] md:p-[18px] md:pb-6 lg:p-6 lg:pb-10  mb-[6.5px]">
        <h4 className="text-sm md:text-xl xl:text-2xl font-bold capitalize md:mb-[10px]">
          {news.title}
        </h4>
        <p className={'text-[10px] md:text-xs lg:text-sm ' + styles.lineClamp3}>
          {news.desc}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
