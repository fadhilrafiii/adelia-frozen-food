import { StaticImageData } from 'next/image';

export interface Review {
  image: StaticImageData | string;
  customerName: string;
  review: string;
  rating: number;
}
