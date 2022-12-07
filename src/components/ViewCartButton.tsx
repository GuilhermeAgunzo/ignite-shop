import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

export function ViewCartButton() {
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <button onClick={handleCartClick}>
      <Handbag size={24} />
      {(cartCount as number) > 0 && <span>{cartCount}</span>}
    </button>
  );
}
