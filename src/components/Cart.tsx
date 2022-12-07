import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { CartContainer } from "../styles/components/cart";

export function Cart() {
  const { shouldDisplayCart, handleCloseCart } = useShoppingCart();

  return (
    <CartContainer style={{ right: shouldDisplayCart ? 0 : -480 }}>
      <button onClick={handleCloseCart}>
        <X size={24} />
      </button>
      <div>
        <h2>Sacola de compras</h2>
      </div>
    </CartContainer>
  );
}
