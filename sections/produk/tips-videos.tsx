import React, { useContext, useMemo } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import TipsBox from 'components/tips-box';

import ClientContext from 'shared/context/client';
import { Tips } from 'shared/types/tips';

const TIPS_VIDEOS: Tips[] = [
  {
    videoId: 'uGEMd3sujJI',
    title: 'Cara Membuka Kemasan Bakso Bulbul Berhadiah Logam Mulia',
  },
  {
    videoId: 'eLOYui4JpfY',
    title:
      'Cara Gampang untuk Mengolah Resep Dimsum ayam jamur Yang Enak, Simpel Dan Lezat',
  },
  {
    videoId: 'X4OL_jC5nmk',
    title: 'Chop Chop Sosis Ayam by Adelia Frozen Food',
  },
];

const TipsVideos = () => {
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
      id="tips-mengolah-produk-adelia-frozen-food"
      className="px-4 sm:px-8 pb-0 pt-20 md:pb-14 md:pt-14"
    >
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Tips Mengolah Frozen Food
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={recentNewsSwiperBreakpoints}
      >
        {TIPS_VIDEOS.map((tips: Tips, idx: number) => (
          <SwiperSlide key={idx} className="p-4 md:pb-6">
            <div className="max-w-[65vw] mx-auto">
              <TipsBox tips={tips} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TipsVideos;
