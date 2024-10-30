import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { ProductType } from "./Products.types";
import { ROUTES } from "../../router/routes";
import productsList from "../../utlity/productsList";

const Products = () => {
  return (
    <Container>
      <h1>Products</h1>
      <ul style={{ listStyle: "none" }}>
        {productsList.map((product: ProductType) => (
          <li key={product.id}>
            <Link
              to={ROUTES.PRODUCTS + "/" + product.id}
              style={{
                backgroundColor: "teal",
                cursor: "pointer",
                color: "white",
                margin: "5px",
              }}
            >
              {product.name} {">"}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Products;
