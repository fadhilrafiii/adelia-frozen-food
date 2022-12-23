import { StaticImageData } from 'next/image';

export interface Product {
  image: StaticImageData | string;
  title: string;
  weight?: number;
  qty?: number;
  price: number;
}
