import { PRODUCTS } from 'shared/constants/product';
import { Product } from 'shared/types/product';

export const getWeightPerQtyProduct = (weight?: number, qty?: number) => {
  if (weight && qty) return `${weight}gr / ${qty}pcs`;

  if (weight) return `${weight}gr`;

  if (qty) return `${qty}pcs`;

  return '';
};

export const getRelatedProducts = (productName: string) => {
  const productId = PRODUCTS.findIndex(
    (product: Product) => product.title === productName,
  );
  const totalProducts = PRODUCTS.length;

  return [
    PRODUCTS[(productId + 1) % totalProducts],
    PRODUCTS[(productId + 2) % totalProducts],
    PRODUCTS[(productId + 3) % totalProducts],
  ];
};
