/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: [
    {
      id: string;
      name: string;
      imageUrl: string;
      quantity: number;
    }
  ];
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={product.id} style={{ marginLeft: `${index * 100}px` }}>
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    width={120}
                    height={110}
                    alt=""
                  />
                </ImageContainer>
              </li>
            );
          })}
        </ul>

        {products.map((product) => {
          return (
            <span key={product.id}>
              {product.quantity}x {product.name}
            </span>
          );
        })}

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {products.reduce((acc, product) => {
            return acc + product.quantity;
          }, 0)}{" "}
          camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = query.session_id as string;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data.map((dataItem) => {
    const product = dataItem.price?.product as Stripe.Product;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      quantity: dataItem.quantity,
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
