import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './home.module.scss';

import BannerNuggetImg from 'public/images/banner-nugget.jpg';

interface Banner {
  image: StaticImageData;
  text: string;
}

const BANNERS: Banner[] = [
  {
    image: BannerNuggetImg,
    text: 'Pusatnya frozen yang berkualitas, lengkap, dan murah',
  },
  {
    image: BannerNuggetImg,
    text: 'Frozen food terlengkap di bandar lampung',
  },
  {
    image: BannerNuggetImg,
    text: 'menyediakan segala jenis frozen food yang lezat dan bergizi',
  },
];

const Landing = () => {
  return (
    <section id="landing">
      <div className="h-[calc(100vh-72px)] max-h-[992px] relative">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className={'!h-full landingHomeSwiper'}
          modules={[Pagination, Navigation]}
        >
          {BANNERS.map((banner: Banner, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="absolute inset-0">
                <Image
                  src={banner.image}
                  className="object-cover"
                  priority
                  fill
                  alt="Adelia Frozen Food"
                  sizes="100vw"
                />
                <div className="absolute inset-center min-w-[238px] w-[70vw] z-10">
                  <h1
                    className={
                      'text-white uppercase text-center max-w-[1000px] text-[30px] md:text-6xl font-bold pb-3 md:pb-6 border-b md:border-b-2 border-white shadow-lg mb-3 md:mb-6 tracking-widest md:tracking-[0.15em] ' +
                      styles.titleDropShadow
                    }
                  >
                    Adelia Frozen Food
                  </h1>
                  <p
                    className={
                      'text-white drop-shadow-md text-2xl md:text-5xl !leading-snug text-center capitalize max-w-[749px] mx-auto ' +
                      styles.subtitleDropShadow
                    }
                  >
                    {banner.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Landing;
