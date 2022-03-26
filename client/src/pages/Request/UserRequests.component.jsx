import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/layout";
const UserRequests = () => {
  const user = useSelector((store) => store.auth.user);
  console.log(user);
  return <Box>heloo</Box>;
};
export default UserRequests;
