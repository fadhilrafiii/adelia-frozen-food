import { Review } from "shared/types/review";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


import Review1Img from 'public/images/review-1.jpg'
import Review2Img from 'public/images/review-2.jpg'
import Review3Img from 'public/images/review-3.jpg'
import { useContext, useMemo } from "react";
import ClientContext from "shared/context/client";
import ReviewCard from "components/review-card";

const REVIEWS: Review[] = [
  {
    image: Review1Img,
    customerName: 'Ale Janes',
    review: 'Makanannya berkualitas, harga terjangkau dan rasanya enak terus lengkap juga mau makanan apapun yang diinginkan. Terus pelayanannya ramah dan murah senyum semua. Apalagi tiap tahun ada giveawaynya. lengkap sudah jos!! Saya sangat merekomendasikan temen-temen untuk mencari makanan berkualitas dan harga terjangkau disini',
    rating: 5,
  },
  {
    image: Review2Img,
    customerName: 'bambang',
    review: 'Adelia frozen food jos banget deh makanannya. Apalagi sosis bratwurstnya beh rasanya mantap banget. Anak saya suka banget, jadinya tiap bulan saya beli terus nih. Pelayanannya juga disini ramah-ramah jadinya ga pernah nyesel beli disini. Rekomended banget',
    rating: 5,
  },
  {
    image: Review3Img,
    customerName: 'wati',
    review: 'Saya sangat senang dengan pelayanannya adelia frozen food pegawainya pada ramah-ramah. Harga terjangkau dan kualitasnya gaperlu lagi diragukan, Saya merekomendasikan buat temen-temen di bandar lampung untuk beli frozen food disini',
    rating: 5,
  },
]

const Review = () => {
  const { isClientReady } = useContext(ClientContext);

  const recentNewsSwiperBreakpoints = useMemo(
    () => ({
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }),
    [],
  );

  if (!isClientReady) return null;

  return (
    <section
      id="review-adelia-frozen-food"
      className="px-4 sm:px-8 py-14 pb-20 lg:pb-36"
    >
      <h2 className="capitalize mb-4 lg:mb-10 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Kata Mereka
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={recentNewsSwiperBreakpoints}
      >
        {REVIEWS.map((review: Review, idx: number) => (
          <SwiperSlide key={idx} className="p-3 pb-6 md:pb-8 relative !h-auto">
            <div className="max-w-[84vw] mx-auto relative h-full">
              <ReviewCard review={review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
