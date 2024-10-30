import { useEffect, useState } from "react";

import Container from "../../components/Container/Container";
import { ProductType } from "./Products.types";
import productsList from "../../utlity/productsList";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  const params = useParams<{id: string}>();

  useEffect(() => {
    const chosenProduct: ProductType | undefined = productsList.find((productItem: ProductType) => {
      if (params.id !== undefined) {
        return productItem.id === parseInt(params.id);
      }
    });
    if (chosenProduct !== undefined) {
      setProduct(chosenProduct);
    }
  }, [params.id]);
  return (
    <Container>
      <h1>Product</h1>
      {product !== null && product !== undefined ? (
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
