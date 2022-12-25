import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import NewsCard from 'components/news-card';

import { NEWS } from 'shared/constants/news';
import ClientContext from 'shared/context/client';
import { News } from 'shared/types/news';

const RecentNews = () => {
  const { isClientReady } = useContext(ClientContext);
  const router = useRouter();

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
      className="px-4 sm:px-8 py-14 pb-0 lg:pb-4"
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
        {NEWS.map((news: News, idx: number) => (
          <SwiperSlide key={idx} className="px-2 pb-4 md:pb-8 !h-auto">
            <div className="max-w-[65vw] mx-auto !h-full">
              <NewsCard news={news} onClick={() => router.push(news.href)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentNews;
