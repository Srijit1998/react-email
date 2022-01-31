import React from "react";
import { Spinner } from "@chakra-ui/react";

const MySpinner = (props) => {
  return (
    <Spinner
      thickness={props.thickness}
      speed={props.speed}
      emptyColor={props.emptyColor}
      color={props.color}
      size={props.size}
    />
  );
};

export default MySpinner;
