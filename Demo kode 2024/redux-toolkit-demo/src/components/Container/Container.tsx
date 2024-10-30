import { ContainerPropsType } from "./Container.types";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Container = (props: ContainerPropsType) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {props.children}

      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Container;
