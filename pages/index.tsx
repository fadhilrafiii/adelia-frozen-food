import Head from 'next/head';

import Landing from 'sections/home/landing';
import MainProducts from 'sections/home/main-products';
import Stats from 'sections/home/stats';

const Home = () => {
  return (
    <>
      <Head>
        <title>Adelia Frozen Food | Frozen Food Lampung</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Landing />
        <MainProducts />
        <Stats />
      </div>
    </>
  );
};

export default Home;
