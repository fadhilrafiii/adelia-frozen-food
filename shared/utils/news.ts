import { StaticImageData } from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isImageContent = (arg: any): arg is StaticImageData => {
  return arg && arg?.src && typeof arg.src === 'string';
};
