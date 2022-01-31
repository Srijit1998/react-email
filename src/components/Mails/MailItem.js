import React from "react";
import Layout from "../UI/Layout";
import { Text, Icon, Box } from "@chakra-ui/react";
import {
  MdOutlineCropSquare,
  MdStarBorder,
  MdLabelImportantOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const MailItem = (props) => {
  return (
    <Link to={`/mail/${props.tag}/${props.id}`}>
      <Layout hasBorder>
        <Box display="flex" alignItems="start">
          <Icon
            as={MdOutlineCropSquare}
            cursor="pointer"
            color="rgba(0, 0, 0, 0.4)"
            h={6}
            w={6}
            mr={2}
            _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
          />
          <Icon
            display={{ base: "none", md: "inline-flex" }}
            as={MdStarBorder}
            cursor="pointer"
            color="rgba(0, 0, 0, 0.4)"
            h={6}
            w={6}
            mr={2}
            _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
          />
          <Icon
            display={{ base: "none", md: "inline-flex" }}
            as={MdLabelImportantOutline}
            cursor="pointer"
            color="rgba(0, 0, 0, 0.4)"
            h={6}
            w={6}
            mr={2}
            _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
          />
        </Box>
        <Box display="flex" w="full" flexDir="column" alignItems="centers">
          <Text
            fontSize={{ base: "xs", md: "lg", lg: "xl" }}
            noOfLines={{ base: "1", md: "2" }}
            fontWeight={{ base: "bold", md: "semibold" }}
          >
            {props.subject}
          </Text>
          <Text
            noOfLines={{ base: "2", md: "1" }}
            fontWeight="normal"
            fontSize={{ base: "xs", md: "md", lg: "lg" }}
          >
            {props.body}
          </Text>
        </Box>
      </Layout>
    </Link>
  );
};

export default MailItem;
