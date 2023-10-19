import Button from "./Button";
import React from "react";

const SecondaryButton = (props) => {
  return (
    <Button
      style={{ backgroundColor: "red", color: "white", padding: '2%' }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
