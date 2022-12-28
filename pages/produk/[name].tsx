import Head from 'next/head';

import { GetStaticPropsContext } from 'next';
import CurrencyFormat from 'react-currency-format';
import RelatedProducts from 'sections/produk/related-products';
import Review from 'sections/shared/review';

import WhatsappOutlineIcon from 'components/icons/whatsapp-outline';
import ImageGallery from 'components/image-gallery';
import Rating from 'components/rating';

import { PRODUCTS } from 'shared/constants/product';
import { Product } from 'shared/types/product';
import { getWeightPerQtyProduct } from 'shared/utils/products';
import { getTitleCase } from 'shared/utils/string';

interface DetailProductProps {
  product: Product;
}

const DetailProduct = ({ product }: DetailProductProps) => {
  const handleClickOrder = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=6288276328327&text=Halo%20saya%20ingin%20memesan%20${getTitleCase(
        product.title,
      )}&type=phone_number&app_absent=0`,
    );
  };

  return (
    <>
      <Head>
        <title>{`${getTitleCase(product.title)} | Adelia Frozen Food`}</title>
        <meta name="description" content={product.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section
          id={`${product.title.split(' ').join('-')}-detail`}
          className="px-1 sm:px-8 md:px-12 lg:px-14 pb-14 pt-8 md:pb-12 md:pt-24 max-w-[1200px] mx-auto"
        >
          <div className="flex flex-wrap justify-center lg:-mx-4 gap-y-7">
            <div className="basis-1/2 overflow-hidden min-w-[300px] sm:min-w-[340px] flex-grow rounded-[10px] lg:rounded-[20px] relative px-4">
              <ImageGallery images={product.images} imgAltKey={product.title} />
            </div>
            <div className="basis-1/2 px-4 min-w-[300px] sm:min-w-[350px] flex-grow">
              <h1 className="font-medium capitalize mb-4 text-3xl md:text-4xl lg:text-6xl">
                {product.title}
              </h1>
              <div className="mb-4 lg:mb-6">
                <Rating
                  rating={product.rating || 5}
                  className="gap-[10px]"
                  iconSize="large"
                />
              </div>
              <div className="mb-4 lg:mb-9">
                <span className="px-[10px] lg:px-5 py-[7px] lg:py-3 rounded-[8px] lg:rounded-[15px] bg-light-grey text-dark-grey text-sm md:text-base lg:text-2xl">
                  {getWeightPerQtyProduct(product.weight, product.qty)}
                </span>
              </div>
              <p className="text-dark-grey text-[10px] md:text-base lg:text-[18px] text-justify pb-7 border-b border-dark-grey">
                {product.desc}
              </p>
              <div className="pointer-events-none my-[14px] md:my-7 text-3xl md:text-4xl lg:text-5xl font-bold">
                <CurrencyFormat
                  thousandSeparator="."
                  decimalSeparator=","
                  value={product.price}
                  prefix="Rp"
                />
              </div>
              <div>
                <button
                  className="flex items-center justify-center w-full border-none outline-none bg-whatsapp py-3 md:py-5 rounded-[20px] gap-6"
                  onClick={handleClickOrder}
                >
                  <WhatsappOutlineIcon size={28} />
                  <span className="tracking-[0.25em] text-white text-[18px] md:text-2xl lg:text-3xl">
                    PESAN
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <RelatedProducts productName={product.title} />
        <Review />
      </div>
    </>
  );
};

export const getStaticPaths = () => {
  const paths = PRODUCTS.map((product: Product) => ({
    params: { name: product.title },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  return {
    props: {
      product: PRODUCTS.find((product: Product) =>
        ctx.params ? product.title === ctx.params['name'] : '',
      ),
    },
  };
};

export default DetailProduct;
