import ProductCard from 'components/product-card';

import { Product } from 'shared/types/product';

import BaksoBulbulUrat from 'public/images/bakso-bulbul-urat.jpg';
import KebabKingSausCabeImg from 'public/images/kebab-king-saus-naga.jpg';
import KimboMiniOriImg from 'public/images/kimbo-mini-ori.jpg';
import KraukUdangTempuraImg from 'public/images/krauk-udang-tempura.jpg';
import PinaKakiNagaImg from 'public/images/pina-kaki-naga.jpg';
import VigoSosisAyamImg from 'public/images/vigo-sosis-ayam.jpg';

const MAIN_PRODUCTS: Product[] = [
  {
    image: KimboMiniOriImg,
    title: 'kimbo mini ori',
    weight: 500,
    qty: 10,
    price: 30000,
  },
  {
    image: VigoSosisAyamImg,
    title: 'vigo sosis ayam',
    weight: 450,
    qty: 15,
    price: 17000,
  },
  {
    image: KraukUdangTempuraImg,
    title: 'krauk udang tempura',
    weight: 250,
    price: 29000,
  },
  {
    image: PinaKakiNagaImg,
    title: 'pina kaki naga',
    weight: 500,
    price: 26000,
  },
  {
    image: KebabKingSausCabeImg,
    title: 'kebab king saus cabe',
    qty: 10,
    price: 45000,
  },
  {
    image: BaksoBulbulUrat,
    title: 'bakso bulbul urat',
    weight: 600,
    qty: 50,
    price: 45000,
  },
];

const MainProducts = () => {
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProducts;
