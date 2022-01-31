import { Avatar } from "@chakra-ui/react";

const MyAvatar = (props) => {
  return (
    <Avatar
      mr={3}
      cursor="pointer"
      size={props.size}
      name={props.name}
      src={props.imageUrl}
    />
  );
};

export default MyAvatar;
