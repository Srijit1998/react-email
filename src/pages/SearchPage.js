import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Box, Center } from "@chakra-ui/react";
import TagsList from "../components/Tags/TagsList";
import MailList from "../components/Mails/MailList";
import MySpinner from "../components/Spinner/MySpinner";
import MyFeedback from "../components/Feedback/MyFeedback";
import { useDispatch, useSelector } from "react-redux";
import { fetchMails } from "../store/data-action";
import { uiActions } from "../store/ui-slice";

const SearchPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const mails = useSelector((state) => state.data.mails);
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    dispatch(uiActions.loading(true));
    dispatch(fetchMails(params.searchTerm, true));
  }, [dispatch, params.searchTerm]);

  return (
    <Box
      display="flex"
      alignItems="center"
      w="full"
      position="relative"
      h="100vh"
    >
      <TagsList hasParams />
      <Box
        bgColor="#F5F5F5"
        flex="1"
        position="absolute"
        top="80px"
        bottom="0"
        right="0"
        left={{ base: "135px", md: "202px" }}
        height="100%"
      >
        {loader && (
          <Center position="absolute" top="80px" left="200px">
            <MySpinner
              thickness="4px"
              emptyColor="gray.200"
              color="#Ced0d1"
              size="xl"
            />
          </Center>
        )}
        {!loader && mails.length !== 0 && (
          <div
            style={{ marginBottom: "15px" }}
            position="absolute"
            top="300px"
            left="200px"
          >
            About {mails.length} results for "{params.searchTerm}" (0.65
            seconds)
          </div>
        )}
        {!loader && mails.length !== 0 && <MailList mails={mails} />}
        {!loader && mails.length === 0 && (
          <MyFeedback text={params.searchTerm} />
        )}
      </Box>
    </Box>
  );
};

export default SearchPage;
