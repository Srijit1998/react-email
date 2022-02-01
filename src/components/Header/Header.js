import {
  QuestionOutlineIcon,
  SearchIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import MyAvatar from "../Avatar/MyAvatar";
import MyInput from "../UI/MyInput";

const Header = () => {
  const inputRef = useRef();
  const history = useHistory();

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    history.push(`/mail/search/${inputRef.current.value}`);
    inputRef.current.value = "";
  };

  const onTitleClickHandler = () => {
    localStorage.removeItem("tagIndex");
    history.push("/");
  };

  return (
    <Box
      borderBottom="3px solid #e8e8e8"
      bgColor="#F5F5F5"
      display="flex"
      alignItems="center"
      h="80px"
      w="full"
      position="fixed"
      zIndex="1"
    >
      <Box display="flex" p={5} flex="1" w="full" alignItems="center">
        <Text
          onClick={onTitleClickHandler}
          cursor="pointer"
          fontSize="4xl"
          fontWeight="semibold"
          letterSpacing="wider"
          color="#666"
          ml={{ base: "none", md: "0.5" }}
          mr={{ base: "5", md: "20" }}
        >
          Email
        </Text>

        <form onSubmit={onFormSubmitHandler}>
          <MyInput
            ref={inputRef}
            width="50vw"
            placeholder="Search mail"
            hasLeft={true}
            leftIcon={
              <SearchIcon
                cursor="pointer"
                color="gray"
                _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
              />
            }
            outline="none"
            border="1px solid lightgray"
            bgColor="white"
          />
        </form>
      </Box>
      <Box ml={2} display="flex" alignItems="center">
        <QuestionOutlineIcon
          color="gray"
          cursor="pointer"
          w={8}
          h={8}
          mr={5}
          display={{ base: "none", md: "inline-flex" }}
          _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
        />
        <SettingsIcon
          color="gray"
          cursor="pointer"
          w={8}
          h={8}
          mr={5}
          display={{ base: "none", md: "inline-flex" }}
          _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
        />
        <MyAvatar
          size="md"
          name="Ryan Florence"
          imageUrl="https://bit.ly/ryan-florence"
        />
      </Box>
    </Box>
  );
};

export default Header;
