import ProductCard from 'components/product-card';

import { Product } from 'shared/types/product';

import BaksoBulbulPolos from 'public/images/bakso-bulbul-polos.jpg';
import BaksoBulbulUrat from 'public/images/bakso-bulbul-urat.jpg';
import CirengSambelNyelekitImg from 'public/images/cireng-sambel-nyelekit.jpg';
import KebabKingSausCabeImg from 'public/images/kebab-king-saus-naga.jpg';
import KimboJumboOriImg from 'public/images/kimbo-jumbo-ori.jpg';
import KimboMiniOriImg from 'public/images/kimbo-mini-ori.jpg';
import KraukEkadoPangsitImg from 'public/images/krauk-ekado-pangsit.jpg';
import KraukUdangTempuraImg from 'public/images/krauk-udang-tempura.jpg';
import PinaKakiNagaImg from 'public/images/pina-kaki-naga.jpg';
import PinaStikIkanImg from 'public/images/pina-stik-ikan.jpg';
import VigoSosisAyamImg from 'public/images/vigo-sosis-ayam.jpg';
import VigoSosisSapiImg from 'public/images/vigo-sosis-sapi.jpg';

const MAIN_PRODUCTS: Product[] = [
  {
    image: KraukEkadoPangsitImg,
    title: 'krauk okago pangsit',
    weight: 250,
    price: 24000,
  },
  {
    image: CirengSambelNyelekitImg,
    title: 'cireng sambel nyelekit',
    weight: 400,
    qty: 20,
    price: 12000,
  },
  {
    image: BaksoBulbulPolos,
    title: 'bakso bulbul polos',
    weight: 600,
    qty: 50,
    price: 25000,
  },
  {
    image: VigoSosisSapiImg,
    title: 'vigo sosis sapi',
    weight: 500,
    qty: 15,
    price: 18000,
  },
  {
    image: KimboMiniOriImg,
    title: 'kimbo mini ori',
    weight: 500,
    qty: 10,
    price: 30000,
  },
  {
    image: KimboJumboOriImg,
    title: 'kimbo jumbo ori',
    weight: 500,
    qty: 7,
    price: 30000,
  },
  {
    image: PinaKakiNagaImg,
    title: 'pina kaki naga',
    weight: 500,
    price: 26000,
  },

  {
    image: PinaStikIkanImg,
    title: 'pina stik ikan',
    weight: 500,
    price: 23000,
  },
  {
    image: KraukUdangTempuraImg,
    title: 'krauk udang tempura',
    weight: 250,
    price: 29000,
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
  {
    image: VigoSosisAyamImg,
    title: 'vigo sosis ayam',
    weight: 450,
    qty: 15,
    price: 17000,
  },
];

const AllProducts = () => {
  return (
    <section
      id="semua-produk-adelia-frozen-food"
      className="px-4 sm:px-8 pb-14 pt-20 md:pb-20 md:pt-24"
    >
      <h2 className="capitalize mb-8 lg:mb-14 text-[30px] lg:text-5xl text-grey text-center !leading-snug">
        Semua Produk
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[10px] lg:gap-x-8 gap-y-8 lg:gap-y-14">
        {MAIN_PRODUCTS.map((product: Product, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
