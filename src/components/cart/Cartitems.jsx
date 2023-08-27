import React from "react";
import { useDispatch } from "react-redux";
import {
  addCart,
  deleteCart,
  recoverProductQuantity,
  removeCart,
} from "../../redux/cart/actions";
import {
  addProductQuantity,
  removeProductQuantity,
} from "../../redux/Product/actions";

const cartItem = ({ product }) => {
  const { name, category, price, quantity, imgurl, cartQuantity } = product;

  const dispatch = useDispatch();

  const removeQuantityHandler = () => {
    if (cartQuantity >= 2) {
      dispatch(removeCart(product));
      dispatch(addProductQuantity(product));
    } else {
      dispatch(deleteCart(product));
      dispatch(addProductQuantity(product));
    }
  };

  const addQuantityHandler = () => {
    dispatch(removeProductQuantity(product));
    dispatch(addCart(product));
  };

  const deletefullCart = () => {
    dispatch(deleteCart(product));
    dispatch(recoverProductQuantity(product));
  };

  const recoverQuantity = () => {
    if (cartQuantity >= 1) {
      dispatch(recoverProductQuantity(product));
    } else if (cartQuantity === 0) {
      dispatch(deleteCart(product));
    }
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imgurl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={addQuantityHandler}
            disabled={quantity === 0 ? true : false}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cartQuantity}</span>
          <button
            onClick={removeQuantityHandler}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={deletefullCart} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default cartItem;
