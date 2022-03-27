import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React, { useState } from "react";
import DummyDp from "../../assets/DummyDp.png";
import moment from "moment";
import CustomButton from "../custom-button/customButton.component";
import Payment from "../../pages/payment/Payment.component";
const ClientRequestCard = ({ req }) => {
  let moment = require("moment");
  if ("default" in moment) {
    moment = moment["default"];
  }
  const [click, setClick] = useState(true);
  console.log(req.hostId);
  return (
    <Box
      borderRadius="20px"
      boxShadow="2px 2px 10px #D3D3D3"
      p="1rem 0.2rem"
      w="40rem"
      h="auto"
      backgroundColor="white"
      mb="2rem"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        {req.isPending && req.isApproved ? (
          <Text fontSize="1.3rem" fontWeight="800" textAlign="center">
            🎉 Wohoo! Your Host approved your Request 🎉
          </Text>
        ) : !req.isApproved && req.isPending ? (
          <Text fontSize="1.3rem" fontWeight="800" textAlign="center">
            We have sent your request to the host
          </Text>
        ) : (
          req.isApproved &&
          !req.isPending && (
            <Text fontSize="1.3rem" fontWeight="800" textAlign="center">
              Your Past orders
            </Text>
          )
        )}
        <Image
          m="1rem"
          w="10rem"
          h="10rem"
          borderRadius="50%"
          src={req.hostId.profilePic}
        ></Image>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Your Request</span>: {req.title}
          </Text>
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Description</span>:{" "}
            {req.description}
          </Text>
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Host Name</span>:{" "}
            {req.hostId.name}
          </Text>
          <span style={{ fontWeight: "600" }}>Start Date:</span>
          <Text m="0.4rem">
            {moment(req.from.Sdate).format("MMMM Do YYYY")}
          </Text>
          <span style={{ fontWeight: "600" }}>Till:</span>
          <Text m="0.4rem">
            {moment(req.from.Edate).format("MMMM Do YYYY")}
          </Text>
          <Text m="0.4rem" textAlign="center">
            <span style={{ fontWeight: "600" }}>Price</span>: {req.price?.total}
          </Text>
        </Flex>
        {/* <Text m="0.4rem">
          <span style={{ fontWeight: "600" }}>Total Price:</span> 88
        </Text> */}
        {req.isApproved && req.isPending && (
          <Flex>
            <CustomButton
              simple
              sx={{ marginRight: "0.8rem", marginLeft: "-0.8rem" }}
            >
              Chat with the Host!
            </CustomButton>
            <Payment
              state={click}
              toggleState={setClick}
              price={req.price?.total}
            />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
export default ClientRequestCard;
