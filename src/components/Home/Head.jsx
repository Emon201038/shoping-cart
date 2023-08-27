import React from "react";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";

const Head = ({ setIsCartPage }) => {
  const carts = useSelector((state) => state.cart);
  const totalCarts = carts
    .map((item) => item)
    .reduce((total, item) => Number(total + Number(item.cartQuantity)), 0);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => setIsCartPage(false)} href="#">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            onClick={() => setIsCartPage(false)}
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#"
            onClick={() => setIsCartPage(true)}
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCarts}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Head;
