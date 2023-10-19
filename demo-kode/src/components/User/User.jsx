import Product from "../Product/Product";
import { ProductContext } from "../../context/ProductContext";
import SecondaryButton from '../Button/SecondaryButton';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const User = () => {
  const userContext = useContext(UserContext);
  const flower = "pink";
  let counterContext = userContext.counter;
  return (
    <div>
      <h3>{userContext.name}</h3>
      <ProductContext.Provider value={{counterContext, flower}}>
        <Product />
      </ProductContext.Provider>

      <SecondaryButton onClick={() => userContext.setName("Dawood")}>Endre context navn</SecondaryButton>

    </div>
  );
};

export default User;
