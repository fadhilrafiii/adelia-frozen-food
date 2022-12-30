import Head from 'next/head';

import AllProducts from 'sections/produk/all-product';
import TipsVideos from 'sections/produk/tips-videos';
import Review from 'sections/shared/review';

const Product = () => {
  return (
    <>
      <Head>
        <title>Produk Kami | Adelia Frozen Food</title>
        <meta
          name="description"
          content="Adelia Frozen Food menjual berbagai macam frozen food seperti Krauk Okago Pangsit, Cireng Sambel Nyelekit, Bakso Bulbul Polos, Vigo Sosis Sapi, Kimbi Mini Ori, Kimbo Jumbo Ori, Pina Kaki Naga, Pina Stik Ikan, Krauk Udang Tempura, Kebab King Saus Cabe, Bakso Bulbul Urat, Vigo Sosis Ayam."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AllProducts />
        <TipsVideos />
        <Review />
      </div>
    </>
  );
};

export default Product;
