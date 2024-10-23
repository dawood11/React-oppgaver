import { useEffect, useState } from "react";

import Container from "../components/Container/Container";
import productsList from "../utlity/productsList";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    const chosenProduct = productsList.find((productItem) => {
      return productItem.id === parseInt(params.id);
    });
    setProduct(chosenProduct);
  }, []);
  return (
    <Container>
      <h1>Product</h1>
      {product !== null ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Product;
