import Image from 'next/image';

import CurrencyFormat from 'react-currency-format';

import { Product } from 'shared/types/product';
import { getWeightPerQtyProduct } from 'shared/utils/products';

import styles from './product-card.module.scss';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick = () => null }: ProductCardProps) => {
  return (
    <div
      className="relative w-full mx-auto md:max-w-[240px] lg:max-w-[414px] flex flex-col"
      role="button"
      onClick={onClick}
    >
      <div
        className={
          'relative overflow-hidden aspect-square rounded-[7px] mb-[-36px] lg:mb-[-84px] ' +
          styles.productImageDropShadow
        }
      >
        <Image
          src={product.images[0]}
          className="object-cover"
          fill
          placeholder="blur"
          alt={product.title}
          sizes="(max-width: 767px) 137px, 414px"
          quality={100}
        />
      </div>
      <div
        className={
          'flex-grow bg-white flex flex-col py-[6px] lg:py-5 px-3 lg:px-6 gap-[5px] mx-[10px] lg:mx-6 justify-between items-start rounded-[7px] relative z-10 ' +
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
        <div className="text-sm lg:text-2xl text-black font-bold pointer-events-none">
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
