import Nav from "./Nav";
import logo from "../assets/logo.png";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ viewCart, setViewCart }: PropsType) {
  const content = (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="donut-logo" className="header__logo" />
      {/* View Cart */}
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
}

export default Header;
