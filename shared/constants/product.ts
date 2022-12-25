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

export const PRODUCTS: Product[] = [
  {
    image: KraukEkadoPangsitImg,
    title: 'krauk okago pangsit',
    weight: 250,
    price: 24000,
    href: '/produk/krauk okago pangsit',
  },
  {
    image: CirengSambelNyelekitImg,
    title: 'cireng sambel nyelekit',
    weight: 400,
    qty: 20,
    price: 12000,
    href: '/produk/cireng sambel nyelekit',
  },
  {
    image: BaksoBulbulPolos,
    title: 'bakso bulbul polos',
    weight: 600,
    qty: 50,
    price: 25000,
    href: '/produk/bakso bulbul polos',
  },
  {
    image: VigoSosisSapiImg,
    title: 'vigo sosis sapi',
    weight: 500,
    qty: 15,
    price: 18000,
    href: '/produk/vigo sosis sapi',
  },
  {
    image: KimboMiniOriImg,
    title: 'kimbo mini ori',
    weight: 500,
    qty: 10,
    price: 30000,
    href: '/produk/kimbo mini ori',
  },
  {
    image: KimboJumboOriImg,
    title: 'kimbo jumbo ori',
    weight: 500,
    qty: 7,
    price: 30000,
    href: '/produk/kimbo jumbo ori',
  },
  {
    image: PinaKakiNagaImg,
    title: 'pina kaki naga',
    weight: 500,
    price: 26000,
    href: '/produk/pina kaki naga',
  },

  {
    image: PinaStikIkanImg,
    title: 'pina stik ikan',
    weight: 500,
    price: 23000,
    href: '/produk/pina stik ikan',
  },
  {
    image: KraukUdangTempuraImg,
    title: 'krauk udang tempura',
    weight: 250,
    price: 29000,
    href: '/produk/krauk udang tempura',
  },
  {
    image: KebabKingSausCabeImg,
    title: 'kebab king saus cabe',
    qty: 10,
    price: 45000,
    href: '/produk/kebab king saus cabe',
  },
  {
    image: BaksoBulbulUrat,
    title: 'bakso bulbul urat',
    weight: 600,
    qty: 50,
    price: 45000,
    href: '/produk/bakso bulbul urat',
  },
  {
    image: VigoSosisAyamImg,
    title: 'vigo sosis ayam',
    weight: 450,
    qty: 15,
    price: 17000,
    href: '/produk/vigo sosis ayam',
  },
];

export const MAIN_PRODUCTS: Product[] = [
  {
    image: KimboMiniOriImg,
    title: 'kimbo mini ori',
    weight: 500,
    qty: 10,
    price: 30000,
    href: '/produk/kimbo mini ori',
  },
  {
    image: VigoSosisAyamImg,
    title: 'vigo sosis ayam',
    weight: 450,
    qty: 15,
    price: 17000,
    href: '/produk/vigo sosis ayam',
  },
  {
    image: KraukUdangTempuraImg,
    title: 'krauk udang tempura',
    weight: 250,
    price: 29000,
    href: '/produk/krauk udang tempura',
  },
  {
    image: PinaKakiNagaImg,
    title: 'pina kaki naga',
    weight: 500,
    price: 26000,
    href: '/produk/pina kaki naga',
  },
  {
    image: KebabKingSausCabeImg,
    title: 'kebab king saus cabe',
    qty: 10,
    price: 45000,
    href: '/produk/kebab king saus cabe',
  },
  {
    image: BaksoBulbulUrat,
    title: 'bakso bulbul urat',
    weight: 600,
    qty: 50,
    price: 45000,
    href: '/produk/bakso bulbul urat',
  },
];
