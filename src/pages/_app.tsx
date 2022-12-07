import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import { ViewCartButton } from "../components/ViewCartButton";
import { Cart } from "../components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <ViewCartButton />
        </Header>

        <Component {...pageProps} />

        <Cart />
      </Container>
    </CartProvider>
  );
}
