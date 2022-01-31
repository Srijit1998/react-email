import React, { useEffect } from "react";
import Layout from "../UI/Layout";
import { Box, Text, Icon, Center } from "@chakra-ui/react";
import { MdMore, MdReply, MdStarBorder } from "react-icons/md";
import MySpinner from "../Spinner/MySpinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchMailDetail } from "../../store/data-action";
import { uiActions } from "../../store/ui-slice";

const MailDetail = (props) => {
  const dispatch = useDispatch();
  const mailDetail = useSelector((state) => state.data.mailDetail);
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    dispatch(uiActions.loading(true));
    dispatch(fetchMailDetail(+props.mailId));
  }, [dispatch, props.mailId]);

  return (
    <>
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
      {!loader && (
        <Layout position="80px">
          <Box
            display="flex"
            w="full"
            flexDir="column"
            px={3}
            alignItems="start"
          >
            <Box display="flex" w="full" alignItems="start">
              <Text
                w="full"
                noOfLines={3}
                fontSize={{ base: "md", md: "xl" }}
                mb={5}
                fontWeight={{ base: "bold", md: "bold" }}
              >
                {mailDetail?.subject}
              </Text>
              <Box
                display="flex"
                w="full"
                justifyContent="end"
                alignItems="center"
              >
                <Icon
                  as={MdStarBorder}
                  h={8}
                  w={8}
                  mr={1}
                  color="gray"
                  _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
                />
                <Icon
                  as={MdReply}
                  h={8}
                  w={8}
                  mr={1}
                  color="gray"
                  _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
                />
                <Icon
                  as={MdMore}
                  h={8}
                  w={8}
                  mr={1}
                  color="gray"
                  _hover={{ color: "rgba(0, 0, 0, 0.3)" }}
                />
              </Box>
            </Box>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="medium">
              {mailDetail?.body}
            </Text>
          </Box>
        </Layout>
      )}
    </>
  );
};

export default MailDetail;
