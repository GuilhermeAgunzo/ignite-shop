import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imgUrl: string;
    price: string;
    unformmatedPrice: number;
  }[];
}

type CartProduct = {
  id: string;
  name: string;
  imgUrl: string;
  price: string;
  unformmatedPrice: number;
};

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddCart({ id, name, imgUrl, unformmatedPrice }: CartProduct) {
    addItem({
      id: id,
      name: name,
      image: imgUrl,
      price: unformmatedPrice,
      currency: "BRL",
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
              className="keen-slider__slide"
            >
              <Image src={product.imgUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button
                  onClick={() => {
                    handleAddCart(product);
                  }}
                >
                  <Handbag size={24} color="white" />
                </button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      unformmatedPrice: price.unit_amount,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(price.unit_amount) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
