import React from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import { useSelector } from "react-redux";

const ProductRaper = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        {products?.length > 0 ? (
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <span className="absolute xl:top-[400px] xl:left-[400px] lg:top-[400px] lg:left-[300px] md:top-[700px] md:left-[350px] sm:left-[250px] max-sm:left-[200px] font-bold text-2xl">
            No products found
          </span>
        )}
        {/* <Product /> */}
      </div>
      <ProductForm />
    </div>
  );
};

export default ProductRaper;
