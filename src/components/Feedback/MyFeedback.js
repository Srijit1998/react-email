import React from "react";
import { Center, Text, Icon } from "@chakra-ui/react";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";

const MyFeedback = (props) => {
  return (
    <Center
      display="flex"
      flexDir="column"
      position="absolute"
      top="250px"
      left={{ base: "120px", md: "140px", lg: "300px", xl: "450px" }}
    >
      <Icon
        as={MdOutlineSentimentDissatisfied}
        h={40}
        w={40}
        color="gray.500"
      />
      <Text fontSize="2xl" fontWeight="semibold" color="gray">
        Sorry, No Results Found for "{props.text}"
      </Text>
    </Center>
  );
};

export default MyFeedback;
