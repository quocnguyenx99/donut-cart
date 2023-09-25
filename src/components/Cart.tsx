import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

function Cart() {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const handleSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };
  const pageContent = confirm ? (
    <h1 className="cart__thankyou">Thank you for your order</h1>
  ) : (
    <div className="cart">
      <div className="cart-item">
        <table className="cart-item__table">
          <thead>
            <tr>
              <th className="cart-item__name">ITEM</th>
              <th className="cart-item__price">PRICE</th>
              <th className="cart-item__qty">QUANTITY</th>
              <th className="cart-item__total">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <CartLineItem
                  key={item.sku}
                  dispatch={dispatch}
                  item={item}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="cart-total">
        <p className="cart-total__heading">Cart Total</p>
        <div className="cart-total__items">
          <p>
            <strong>Total Items:</strong> {totalItems}
          </p>
        </div>
        <div className="cart-total__price">
          <p>
            <strong>Total Price:</strong> {totalPrice}
          </p>
        </div>
        <button
          className="button cart-total__button"
          onClick={handleSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );

  const content = <main className="main--cart">{pageContent}</main>;

  return content;
}

export default Cart;
