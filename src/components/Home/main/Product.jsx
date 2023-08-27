import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/cart/actions";
import { removeProductQuantity } from "../../../redux/Product/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { name, imgurl, price, category, quantity } = product;

  const handleAddToCart = () => {
    dispatch(addCart(product));
    dispatch(removeProductQuantity(product));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgurl} alt={name} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0 ? true : false}
          onClick={handleAddToCart}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
