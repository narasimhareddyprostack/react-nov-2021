import React, { useState } from "react";
let Product = () => {
  let [product, setProduct] = useState({
    name: "Iphone 12",
    price: 5555,
    qty: 1,
  });
  return (
    <>
      <h1>Prodcut Name:{product.name}</h1>
      <h1>Prodcut Name:{product.price}</h1>
      <h1>Prodcut Name:{product.qty}</h1>
      <button
        onClick={() => {
          setProduct({ ...product, qty: product.qty + 1 });
        }}
      >
        {product.qty}
      </button>
    </>
  );
};
export default Product;
