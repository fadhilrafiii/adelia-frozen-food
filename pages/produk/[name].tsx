import Head from 'next/head';

import { GetStaticPropsContext } from 'next';
import Review from 'sections/shared/review';

import { PRODUCTS } from 'shared/constants/product';
import { Product } from 'shared/types/product';

interface DetailProductProps {
  product: Product;
}

const DetailProduct = ({ product }: DetailProductProps) => {
  return (
    <>
      <Head>
        <title>{`${product.title} | Adelia Frozen Food`}</title>
        <meta name="description" content={product.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section
          id={`${product.title.split(' ').join('-')}-detail`}
          className="px-4 sm:px-8 md:px-12 lg:px-14 pb-14 pt-8 md:pb-12 md:pt-24 max-w-[1096px] mx-auto"
        >
          {product.title}
        </section>
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
