import React from "react";
import CartItem from "./Cartitems";
import BillDetails from "./BillDetails";
import { useSelector } from "react-redux";
const Cart = () => {
  const carts = useSelector((state) => state.cart);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.length > 0
              ? carts?.map((item) => <CartItem key={item.id} product={item} />)
              : "You have no Item in cart"}
          </div>
          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
