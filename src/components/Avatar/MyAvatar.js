import { Avatar } from "@chakra-ui/react";

const MyAvatar = (props) => {
  return (
    <Avatar
      border="none"
      mr={3}
      cursor="pointer"
      size={props.size}
      name={props.name}
      src={props.imageUrl}
    />
  );
};

export default MyAvatar;
