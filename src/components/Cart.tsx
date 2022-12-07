import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";
import {
  CartContainer,
  CartProductDetails,
  CartProductListContainer,
  CartTotalizer,
} from "../styles/components/cart";

export function Cart() {
  const {
    shouldDisplayCart,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    decrementItem,
    handleCloseCart,
  } = useShoppingCart();

  const cart: CartEntry[] = [];

  for (const id in cartDetails) {
    const cartItem = cartDetails[id];
    cart.push(cartItem);
  }

  async function handleCheckout() {
    const response = await axios.post("/api/cartcheckout", {
      cart,
    });

    const { checkoutUrl } = response.data;

    window.location.href = checkoutUrl;
  }

  return (
    <CartContainer style={{ right: shouldDisplayCart ? 0 : -480 }}>
      <button onClick={handleCloseCart}>
        <X size={24} />
      </button>
      <div>
        <h2>Sacola de compras</h2>

        <CartProductListContainer>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <Image
                  src={product.image as string}
                  width={102}
                  height={93}
                  alt=""
                />
                <CartProductDetails>
                  <div>
                    <h5>
                      {product.quantity}x {product.name}
                    </h5>
                    <strong>{product.formattedValue}</strong>
                  </div>
                  <button onClick={() => decrementItem(product.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </li>
            );
          })}
        </CartProductListContainer>
      </div>

      <CartTotalizer>
        <p>
          Quantidade
          <span>{cartCount} itens</span>
        </p>
        <p>
          <b>Valor total</b>
          <strong>{formattedTotalPrice}</strong>
        </p>
        <button disabled={cartCount === 0} onClick={handleCheckout}>
          Finalizar compra
        </button>
      </CartTotalizer>
    </CartContainer>
  );
}
