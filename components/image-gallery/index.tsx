import Image, { StaticImageData } from 'next/image';
import React, { useContext, useState } from 'react';

import Swiper, { FreeMode, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { SwiperSlide, Swiper as SwiperSlider } from 'swiper/react';

import ClientContext from 'shared/context/client';

interface ImageGalleryProps {
  images: Array<string | StaticImageData>;
  imgAltKey: string;
}

const ImageGallery = ({ images, imgAltKey }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const { isClientReady } = useContext(ClientContext);

  if (!isClientReady) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeThumbsSwiper = (swiper: any) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className="relative">
      <SwiperSlider
        loop={true}
        spaceBetween={10}
        modules={[FreeMode, Thumbs]}
        className="mb-8"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((img: string | StaticImageData, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden aspect-square relative rounded-[10px] lg:rounded-[20px]">
              <Image
                src={img}
                alt={`${imgAltKey}-${idx}`}
                placeholder="blur"
                fill
                sizes="(max-width: 767px) 90vw, 45vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperSlider>
      <SwiperSlider
        onSwiper={handleChangeThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="galleryThumbsSwiper"
      >
        {images.map((img: string | StaticImageData, idx: number) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden aspect-square relative rounded-[8px] lg:rounded-[15px] p-2">
              <Image
                src={img}
                alt={`${imgAltKey}-${idx}`}
                placeholder="blur"
                fill
                sizes="(max-width: 767px) 90vw, 45vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default ImageGallery;
