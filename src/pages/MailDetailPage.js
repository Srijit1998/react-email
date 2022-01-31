import React from "react";
import { useParams } from "react-router";
import { Box } from "@chakra-ui/react";
import TagsList from "../components/Tags/TagsList";
import MailDetail from "../components/Mails/MailDetail";

const MailDetailPage = (props) => {
  const params = useParams();

  return (
    <Box
      display="flex"
      alignItems="center"
      w="full"
      position="relative"
      h="100vh"
    >
      <TagsList />
      <Box
        bgColor="#F5F5F5"
        flex="1"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        left={{ base: "152px", md: "202px" }}
        height="100%"
      >
        <MailDetail mailId={params.emailId} />
      </Box>
    </Box>
  );
};

export default MailDetailPage;
