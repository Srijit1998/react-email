import React, { useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";
import TagsList from "../components/Tags/TagsList";
import { useParams } from "react-router";
import MailList from "../components/Mails/MailList";
import MySpinner from "../components/Spinner/MySpinner";
import { useDispatch } from "react-redux";
import { fetchMails } from "../store/data-action";
import { useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const MailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const mails = useSelector((state) => state.data.mails);
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    dispatch(uiActions.loading(true));
    dispatch(fetchMails(params.term));
  }, [dispatch, params.term]);

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
        top="82px"
        bottom="0"
        right="0"
        left={{ base: "152px", md: "202px" }}
        height="100%"
      >
        {!loader && <MailList mails={mails} />}
        {loader && (
          <Center>
            <MySpinner
              thickness="4px"
              emptyColor="gray.200"
              color="#Ced0d1"
              size="xl"
            />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default MailsPage;
