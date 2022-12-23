import React, { useContext, useMemo } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import NewsCard from 'components/news-card';

import ClientContext from 'shared/context/client';
import { News } from 'shared/types/news';

import DummyNewsImage from 'public/images/dummy-news.jpg';

const RECENT_NEWS: News[] = [
  {
    title: 'lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: DummyNewsImage,
    href: '/',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: DummyNewsImage,
    href: '/',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: DummyNewsImage,
    href: '/',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: DummyNewsImage,
    href: '/',
  },
];

const RecentNews = () => {
  const { isClientReady } = useContext(ClientContext);

  const recentNewsSwiperBreakpoints = useMemo(
    () => ({
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }),
    [],
  );

  if (!isClientReady) return null;

  return (
    <section
      id="berita-terbaru-adelia-frozen-food"
      className="px-4 sm:px-8 py-14 pb-4 lg:pb-8"
    >
      <h2 className="capitalize mb-4 lg:mb-10 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Berita Terbaru
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={recentNewsSwiperBreakpoints}
      >
        {RECENT_NEWS.map((news: News, idx: number) => (
          <SwiperSlide key={idx} className="p-4 md:pb-6">
            <div className="max-w-[65vw] mx-auto">
              <NewsCard news={news} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentNews;
