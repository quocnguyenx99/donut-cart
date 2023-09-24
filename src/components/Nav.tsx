type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ viewCart, setViewCart }: PropsType) {
  const content = viewCart ? (
    <div className="header__cart-view">
      <p>Total Price: </p>
      <button className="button" onClick={() => setViewCart(false)}>
        View Products
      </button>
    </div>
  ) : (
    <div className="header__cart-view">
      <p>Total Price: </p>
      <button className="button" onClick={() => setViewCart(true)}>
        View Cart
      </button>
    </div>
  );
  return content;
}

export default Nav;
