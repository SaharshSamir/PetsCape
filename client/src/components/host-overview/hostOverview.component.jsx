import { Flex,Text } from "@chakra-ui/react";
import { Avatar, Rating } from "@mui/material";
import React from "react";
import CustomButton from "../custom-button/customButton.component";

const HostOverview = ({ host }) => {
  return (
    <Flex direction="column" alignItems='center' cursor="pointer" >
      <Avatar src={host?.profilePic} sx={{width:200,height:200}} />
      <Text fontSize="1.5em" margin="10px">{host?.name}</Text>
      <Rating value={3} readOnly size="large" />
    </Flex>
  );
};

export default HostOverview;
