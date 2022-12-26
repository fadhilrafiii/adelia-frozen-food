import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from 'components/product-card';

import ClientContext from 'shared/context/client';
import { Product } from 'shared/types/product';
import { getRelatedProducts } from 'shared/utils/products';

interface RelatedProductsProps {
  productName: string;
}

const RelatedProducts = ({ productName }: RelatedProductsProps) => {
  const router = useRouter();
  const { isClientReady } = useContext(ClientContext);

  const relatedProducts = useMemo(
    () => getRelatedProducts(productName),
    [productName],
  );

  const relatedProductsSwiperBreakpoints = useMemo(
    () => ({
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
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
      id="produk-terkait-adelia-frozen-food"
      className="px-4 sm:px-8 pb-10 pt-10 md:pb-14 md:pt-14"
    >
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Produk Terkait
      </h2>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-x-[10px] lg:gap-x-8 gap-y-8 lg:gap-y-14">
        {relatedProducts.map((product: Product, idx: number) => (
          <ProductCard
            key={idx}
            product={product}
            onClick={() => router.push(product.href)}
          />
        ))}
      </div>
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          breakpoints={relatedProductsSwiperBreakpoints}
        >
          {relatedProducts.map((product: Product, idx: number) => (
            <SwiperSlide key={idx} className="px-2 pb-4 md:pb-8 !h-auto">
              <div className="max-w-[65vw] mx-auto !h-full">
                <ProductCard
                  key={idx}
                  product={product}
                  onClick={() => router.push(product.href)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedProducts;
