import { ReactElement, createContext } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initProductsState: ProductType[] = [
  {
    sku: "item0001",
    name: "Chocolate Donut",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Pink Donut",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Vanilla Donut",
    price: 29.99,
  },
];

export type UseProductsContextType = {
  products: ProductType[];
};

const initProductContextState: UseProductsContextType = { products: [] };
const ProductsContext = createContext(initProductContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const products: ProductType[] = initProductsState;
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
