import { useContext } from "react";

import ProductsContext from "../context/ProductProvider";
import { UseProductsContextType } from "../context/ProductProvider";

function useProduct(): UseProductsContextType {
  return useContext(ProductsContext);
}

export default useProduct;
