import Image from 'next/image';

import CurrencyFormat from 'react-currency-format';

import { Product } from 'shared/types/product';
import { getWeightPerQtyProduct } from 'shared/utils/products';

import styles from './product-card.module.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="relative w-full mx-auto md:max-w-[240px] lg:max-w-[414px]">
      <div
        className={
          'relative overflow-hidden aspect-square rounded-[7px] mb-[-36px] lg:mb-[-84px] ' +
          styles.productImageDropShadow
        }
      >
        <Image
          src={product.image}
          className="object-cover"
          fill
          placeholder="blur"
          blurDataURL="/images/logo.png"
          alt={product.title}
          sizes="137px"
        />
      </div>
      <div
        className={
          'bg-white flex flex-col py-[6px] lg:py-5 px-3 lg:px-6 gap-[5px] mx-[10px] lg:mx-6 justify-between items-start rounded-[7px] relative z-10 ' +
          styles.productContentBoxShadow
        }
      >
        <div className="flex flex-col items-start gap-[5px]">
          <h4 className="font-medium text-black capitalize text-sm lg:text-2xl ">
            {product.title}
          </h4>
          <span className="text-[10px] lg:text-sm text-black py-[3px] px-[5px] rounded-[3px] bg-light-grey">
            {getWeightPerQtyProduct(product.weight, product.qty)}
          </span>
        </div>
        <div className="text-sm lg:text-2xl text-black font-bold">
          <CurrencyFormat
            thousandSpacing="2s"
            value={product.price}
            prefix="Rp."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;