import { StaticImageData } from 'next/image';

export interface News {
  image: string | StaticImageData;
  title: string;
  desc: string;
  date?: string;
  content?: string | Array<string | StaticImageData>;
  href: string;
}
