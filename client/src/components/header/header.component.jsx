import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Avatar, Button, TextField, styled } from "@mui/material";
import CustomButton from "../custom-button/customButton.component";

const SearchBar = styled(TextField)(() => ({
  width: "50vw",
  "& input": {
    padding: "8px 25px",
  },
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    "& fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
}));

const Header = () => {
  return (
    <Flex
      height="50px"
      padding="5px 10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="row" alignItems="center" height="100%">
        <Text
          fontFamily="Hurricane"
          fontSize="2em"
          lineHeight="100%"
          margin="0 30px 0 20px"
          
        >
          Petscape
        </Text>
        <SearchBar variant="outlined" sx={{ padding: "0px" }} placeholder="Search care takers" />
      </Flex>
      <Flex direction="row" padding="0 20px">
        <CustomButton>BECOME A HOST</CustomButton>
        <Avatar src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" sx={{marginLeft:'20px'}} />
      </Flex>
    </Flex>
  );
};

export default Header;
