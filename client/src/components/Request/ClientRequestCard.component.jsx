import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import DummyDp from "../../assets/DummyDp.png";
import moment from "moment";
import CustomButton from "../custom-button/customButton.component";
const ClientRequestCard = () => {
  return (
    <Box
      borderRadius="20px"
      boxShadow="2px 2px 10px #D3D3D3"
      p="1rem 0.3rem"
      m="4rem"
      w="40rem"
      h="auto"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="1.3rem" fontWeight="800" textAlign="center">
          🎉 Wohoo! Your Host approved your Request 🎉
        </Text>
        <Image
          m="1rem"
          w="10rem"
          h="10rem"
          borderRadius="50%"
          src={DummyDp}
        ></Image>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Your Request</span>: Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </Text>
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Description</span>: Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </Text>
          <span style={{ fontWeight: "600" }}>Start Date:</span>
          <Text m="0.4rem">
            {moment("Fri Apr 12 2013 19:08:55 GMT-0500 (CDT)").format(
              "MMMM Do YYYY"
            )}
          </Text>
          <span style={{ fontWeight: "600" }}>Till:</span>
          <Text m="0.4rem">
            {moment("Fri Apr 12 2013 19:08:55 GMT-0500 (CDT)").format(
              "MMMM Do YYYY"
            )}
          </Text>
        </Flex>
        <Text m="0.4rem">
          <span style={{ fontWeight: "600" }}>Total Price:</span> 88
        </Text>
        <Flex>
          <CustomButton
            simple
            sx={{ marginRight: "0.8rem", marginLeft: "-0.8rem" }}
          >
            Chat with the Host!
          </CustomButton>
          <CustomButton simple>Pay the Host!</CustomButton>
        </Flex>
      </Flex>
    </Box>
  );
};
export default ClientRequestCard;
