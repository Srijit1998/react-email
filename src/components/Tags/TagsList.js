import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  MdOutlineInbox,
  MdOutlineDrafts,
  MdOutlineDelete,
  MdOutlineAllInclusive,
  MdInfoOutline,
} from "react-icons/md";
import TagItem from "./TagItem";

const TagsList = (props) => {
  const tagIndex = localStorage.getItem("tagIndex") || "0";
  const [activeIndex, setActiveIndex] = useState(+tagIndex);

  const tags = [
    {
      id: 1,
      name: "Inbox",
      icon: MdOutlineInbox,
    },
    {
      id: 2,
      name: "Draft",
      icon: MdOutlineDrafts,
    },
    {
      id: 3,
      name: "Spam",
      icon: MdInfoOutline,
    },
    {
      id: 4,
      name: "Trash",
      icon: MdOutlineDelete,
    },
    {
      id: 5,
      name: "All",
      icon: MdOutlineAllInclusive,
    },
  ];

  useEffect(() => {
    if (props.hasParams) {
      setActiveIndex(null);
    }
  }, [props.hasParams]);

  const onItemClickHandler = (tagName) => {
    const index = tags.findIndex((tag) => tag.name === tagName);
    localStorage.setItem("tagIndex", index.toString());
    setActiveIndex(index);
  };

  return (
    <Box
      pt={5}
      bgColor="#F5F5F5"
      display="flex"
      flexDir="column"
      alignItems="center"
      position="fixed"
      top="80px"
      bottom="0"
      left="0"
      height="100%"
      w={{ base: "150px", md: "200px" }}
      borderRight="2px solid #e8e8e8"
    >
      {tags.map((tag, index) => {
        const active = activeIndex === index ? true : false;
        return (
          <TagItem
            key={tag.id}
            text={tag.name}
            isActive={active}
            icon={tag.icon}
            onItemClickHandler={onItemClickHandler}
          />
        );
      })}
    </Box>
  );
};

export default TagsList;
