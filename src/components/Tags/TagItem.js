import { Box, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TagItem = (props) => {
  const link = props.text.toLowerCase();

  const onTagItemClickHandler = () => {
    props.onItemClickHandler(props.text);
  };

  return (
    <Link to={`/mail/${link}`} style={{ width: "90%", marginLeft: "-20px" }}>
      <Box
        onClick={onTagItemClickHandler}
        cursor="pointer"
        mb={5}
        p={2}
        px={8}
        w="full"
        mr={6}
        display="flex"
        alignItems="center"
        bgColor={props.isActive && "#E8EAED"}
        _hover={{ bgColor: !props.isActive && "#E8EAED" }}
        borderRightRadius="20px"
      >
        <Icon
          as={props.icon}
          h={6}
          w={6}
          mr={2}
          color="gray"
          _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
        />
        <Text
          letterSpacing="wider"
          fontSize="md"
          color="#113"
          fontWeight="semibold"
        >
          {props.text}
        </Text>
      </Box>
    </Link>
  );
};

export default TagItem;
