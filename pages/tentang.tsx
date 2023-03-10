import Head from 'next/head';
import Image from 'next/image';

import AboutImg from 'public/images/about-image.jpg';
import MisiImg from 'public/images/misi-image.jpg';
import VisiImg from 'public/images/visi-image.jpg';

const About = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami | Adelia Frozen Food</title>
        <meta
          name="description"
          content="Adelia Frozen Food sebagai toko frozen food yang terlaris di Bandar Lampung semenjak 2015 menjadi pilihan tepat untuk membeli frozen food seperti makanan, sayuran, dan daging."
        />
      </Head>
      <div className="flex flex-col gap-y-16 py-16 lg:py-32 pb-24 lg:pb-[10vw] px-[9vw] items-center">
        <section id="visi-adelia-frozen" className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-y-7 items-center">
            <div className="overflow-hidden relative aspect-[8/9] basis-1/2 min-w-full sm:min-w-0 w-full flex-grow max-w-[527px]  rounded-[10px] lg:rounded-[20px]">
              <Image
                src={VisiImg}
                alt="visi-adelia-frozen"
                sizes="(max-width: 767px) 90vw, 45vw"
                fill
                placeholder="blur"
              />
            </div>
            <div className="basis-1/2 flex-grow sm:px-6 md:px-[6vw] xl:px-[min(10vw,144px)]">
              <h2 className="font-medium text-2xl md:text-3xl lg:text-5xl text-dark-grey uppercase tracking-[0.15em] mb-3 md:mb-6 lg:mb-[30px]">
                Visi
              </h2>
              <p className="capitalize text-dark-grey text-[18px] md:text-2xl lg:text-[30px] lg:pr-8 !leading-[1.2]">
                Menyediakan pilihan makanan berkualitas tinggi, lengkap dan
                murah yang diakui oleh para pelanggan
              </p>
            </div>
          </div>
        </section>
        <section id="misi-adelia-frozen" className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap-reverse gap-y-7 items-center">
            <div className="basis-1/2 flex-grow sm:px-6 md:px-[6vw] xl:px-[min(10vw,144px)]">
              <h2 className="font-medium text-2xl md:text-3xl lg:text-5xl text-dark-grey uppercase tracking-[0.15em] mb-3 md:mb-6 lg:mb-[30px]">
                Misi
              </h2>
              <p className="capitalize text-dark-grey text-[18px] md:text-2xl lg:text-[30px] lg:pr-14 !leading-[1.2]">
                Kami terus mengembangkan produk-produk yang menggabungkan rasa
                yang lezat dengan nutrisi yang seimbang serta meningkatkan
                standar kualitas dan keamanan produk kami
              </p>
            </div>
            <div className="overflow-hidden relative aspect-[8/9] basis-1/2 min-w-full sm:min-w-0 w-full flex-grow max-w-[527px]  rounded-[10px] lg:rounded-[20px]">
              <Image
                src={MisiImg}
                alt="misi-adelia-frozen"
                sizes="(max-width: 767px) 90vw, 45vw"
                fill
                placeholder="blur"
              />
            </div>
          </div>
        </section>
        <section id="about-adelia-frozen" className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-y-7 items-center">
            <div className="overflow-hidden relative aspect-[8/9] basis-1/2 min-w-full sm:min-w-0 w-full flex-grow max-w-[527px] rounded-[10px] lg:rounded-[20px]">
              <Image
                src={AboutImg}
                alt="about-adelia-frozen"
                sizes="(max-width: 767px) 90vw, 45vw"
                fill
                placeholder="blur"
              />
            </div>
            <div className="basis-1/2 flex-grow sm:px-6 md:px-[6vw] xl:px-[min(10vw,144px)]">
              <p className="capitalize text-dark-grey text-[18px] md:text-2xl lg:text-[30px] lg:pr-8 !leading-[1.2]">
                Sudah terpercaya dari tahun 2015 dengan lebih dari 300+
                distributor dan 500+ reseller yang tersebar di Provinsi Lampung
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
