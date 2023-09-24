import { ProductType } from "../context/ProductProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  inCart: boolean;
  REDUCER_ACTIONS: ReducerActionType;
};

function Product({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement {
  const img: string = new URL(
    `../assets/images/${product.sku}.jpg`,
    import.meta.url
  ).href;

  const handleAddToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };

  const itemInCart = inCart ? "Item In Cart ✅" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button className="button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </article>
  );
  return content;
}

export default Product;
