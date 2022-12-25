import { useRouter } from 'next/router';

import ProductCard from 'components/product-card';

import { MAIN_PRODUCTS } from 'shared/constants/product';
import { Product } from 'shared/types/product';

const MainProducts = () => {
  const router = useRouter();

  return (
    <section id="produk-unggulan" className="px-4 sm:px-8 py-14 md:py-20">
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Produk Unggulan
      </h2>
      <div className="flex flex-wrap gap-x-[10px] lg:gap-x-8 gap-y-8 lg:gap-y-14 justify-center items-start relative">
        {MAIN_PRODUCTS.map((product: Product, idx: number) => (
          <div
            key={idx}
            className="w-[calc(50%-5px)] lg:w-[calc(33%-24px)] flex-shrink"
          >
            <ProductCard
              product={product}
              onClick={() => router.push(product.href)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProducts;
