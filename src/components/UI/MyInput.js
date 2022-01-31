import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <InputGroup borderRadius={15} size="lg">
      <InputLeftElement children={props.hasLeft && props.leftIcon} />
      <Input
        w={props.width}
        ref={ref}
        bgColor="#F1F3F4"
        flex={props.flex}
        border="none"
        _focus={{
          outline: props.outline,
          bgColor: props.bgColor,
          border: props.border,
        }}
        placeholder={props.placeholder}
        _placeholder={{ color: "#5F6368", fontWeight: "normal" }}
      />
      <InputRightElement children={props.hasRight && props.rightIcon} />
    </InputGroup>
  );
});

export default MyInput;
