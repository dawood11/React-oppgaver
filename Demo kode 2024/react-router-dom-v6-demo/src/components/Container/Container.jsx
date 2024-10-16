import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Container = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location)

  return (
    <>
      <Navbar />
      {props.children}

      <button type="button" onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Container;
