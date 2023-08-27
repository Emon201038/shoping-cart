import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/Product/actions";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    imgurl: "",
    category: "",
    price: "",
    quantity: "",
  });

  const inputHandler = (fieldName, e) => {
    if (fieldName === "price" || fieldName === "quantity") {
      setInput({
        ...input,
        [fieldName]: Number(e.target.value),
      });
    } else {
      setInput({ ...input, [fieldName]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    setInput({
      name: "",
      imgurl: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={submitHandler}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              value={input?.name}
              onChange={(e) => inputHandler("name", e)}
              type="text"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              value={input?.category}
              onChange={(e) => inputHandler("category", e)}
              type="text"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              value={input?.imgurl}
              onChange={(e) => inputHandler("imgurl", e)}
              type="text"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                value={input?.price}
                onChange={(e) => inputHandler("price", e)}
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                value={input?.quantity}
                onChange={(e) => inputHandler("quantity", e)}
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
