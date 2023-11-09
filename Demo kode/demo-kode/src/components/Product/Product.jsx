import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

const Product = () => {
  const { counterContext, flower } = useContext(ProductContext);
//   console.log(counterContext, flower);
  return (
    <div>
      <p>
        has {counterContext} of products with color {flower}
      </p>
    </div>
  );
};

export default Product;
