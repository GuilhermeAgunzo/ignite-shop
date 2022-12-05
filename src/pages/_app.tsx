import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { CartProvider } from "use-shopping-cart";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      currency="BRL"
      shouldPersist={false}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <button>
            <Handbag size={24} />
          </button>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
