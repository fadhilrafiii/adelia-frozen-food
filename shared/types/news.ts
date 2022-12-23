import { StaticImageData } from 'next/image';

export interface News {
  image: string | StaticImageData;
  title: string;
  desc: string;
  href: string;
}
