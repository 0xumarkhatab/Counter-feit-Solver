import React from "react";
import AddProduct from "./AddProduct";
import "./Products.css";
import ShowProducts from "./ShowProducts";

function Products() {
  return (
    <div className="products">
      <div className="products__left">
        <AddProduct />
      </div>
      <div className="products__right">
        <ShowProducts />
      </div>
    </div>
  );
}

export default Products;
