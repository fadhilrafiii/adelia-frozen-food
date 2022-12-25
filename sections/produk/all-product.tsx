import { useRouter } from 'next/router';

import ProductCard from 'components/product-card';

import { PRODUCTS } from 'shared/constants/product';
import { Product } from 'shared/types/product';

const AllProducts = () => {
  const router = useRouter();

  return (
    <section
      id="semua-produk-adelia-frozen-food"
      className="px-4 sm:px-8 pb-14 pt-20 md:pb-20 md:pt-24"
    >
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Semua Produk
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[10px] lg:gap-x-8 gap-y-8 lg:gap-y-14">
        {PRODUCTS.map((product: Product, idx: number) => (
          <ProductCard
            key={idx}
            product={product}
            onClick={() => router.push(product.href)}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
