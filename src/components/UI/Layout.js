import React from "react";
import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box
      bgColor="white"
      w="full"
      p={3}
      position="relative"
      top={props.position}
      cursor="pointer"
      display="flex"
      alignItems={{ base: "start", md: "center" }}
      borderBottom="1px solid #e8e8e8"
      _hover={{ border: props.hasBorder ? "1px solid gray" : "none" }}
    >
      {props.children}
    </Box>
  );
};

export default Layout;
