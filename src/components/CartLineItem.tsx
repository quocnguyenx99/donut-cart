import { ChangeEvent, ReactElement, memo } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";

type PropsType = {
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  item: CartItemType;
};

function CartLineItem({ item, dispatch, REDUCER_ACTIONS }: PropsType) {
  const img: string = new URL(
    `../assets/images/${item.sku}.jpg`,
    import.meta.url
  ).href;

  const lineTotal: number = item.qty * item.price;
  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`otp${val}`} value={val}>
        {val}
      </option>
    );
  });
  const handleChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const handleRemoveItem = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };

  const content = (
    <tr>
      <td className="cart-item__body-detail">
        <button onClick={handleRemoveItem}>❌</button>
        <img src={img} alt={item.name} />
        <span>{item.name}</span>
      </td>

      <td className="cart-item__body-price">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </td>
      <td className="cart-item__body-qty">
        <select
          name="itemQty"
          id="itemQty"
          value={item.qty}
          aria-label="Item Quantity"
          onChange={handleChangeQty}
        >
          {options}
        </select>
      </td>
      <td className="cart-item__body-total">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </td>
    </tr>
  );

  return content;
}
function areItemsEquals(
  { item: prevItem }: PropsType,
  { item: nextItem }: PropsType
) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
  CartLineItem,
  areItemsEquals
);
export default MemoizedCartLineItem;
