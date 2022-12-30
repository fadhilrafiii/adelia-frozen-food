import Head from 'next/head';

import Landing from 'sections/home/landing';
import MainProducts from 'sections/home/main-products';
import RecentNews from 'sections/home/recent-news';
import Stats from 'sections/home/stats';
import Review from 'sections/shared/review';

const Home = () => {
  return (
    <>
      <Head>
        <title>Adelia Frozen Food | Frozen Food Lampung</title>
        <meta
          name="description"
          content="Adelia Frozen Food menyediakan berbagai jenis produk frozen food berkualitas lengkap, mulai dari makanan, sayur-sayuran, daging, hingga seafood di Bandar Lampung tahun 2015. Beli frozen food di Lampung, ya ke Adelia Frozen Food aja!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Landing />
        <MainProducts />
        <Stats />
        <RecentNews />
        <Review />
      </div>
    </>
  );
};

export default Home;
