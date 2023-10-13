import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="w-24 mx-7" src={logo} alt="Hungary Hub" title="" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg">
      <Title />
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4 hover:text-green-400">
            Status {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4 hover:text-green-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-green-400">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-green-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-green-400 cursor-pointer hover:text-green-500">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping">({cartItems.length})</i>
            </Link>
          </li>
          <li className="p-2 bg-green-400 rounded-md text-white hover:text-black">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}>
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
