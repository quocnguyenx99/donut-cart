import { ReactElement } from "react";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";
import Product from "./Product";
// import ad from "../assets/donut-ad.jpg";

function ProductList() {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProduct();

  let pageContent: ReactElement | ReactElement[] = <div>Loading...</div>;
  if (products.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--product">{pageContent}</main>;
  return content;
}

export default ProductList;
