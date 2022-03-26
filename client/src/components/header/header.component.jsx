import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Avatar, Button, TextField, styled, Popover } from "@mui/material";
import CustomButton from "../custom-button/customButton.component";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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

const DropDownKey = ({ text, iconName }) => {
  return (
    <Button
      sx={{
        width: "200px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "5px 10px",
        margin: "5px 0",
        color: "#000",
        "&:hover": {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
        borderRadius: "5px",
      }}
    >
      <Icon icon={iconName} />

      <Text marginLeft="10px">{text}</Text>
    </Button>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Flex
      height="60px"
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
          onClick={() => {
            navigate("/home");
          }}
          cursor="pointer"
        >
          Petscape
        </Text>
        <SearchBar
          variant="outlined"
          sx={{ padding: "0px" }}
          placeholder="Search care takers"
        />
      </Flex>
      <Flex direction="row" padding="0 20px">
        <CustomButton onClick={() => navigate("/hostVerify")}>
          BECOME A HOST
        </CustomButton>

        <Avatar
          src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          sx={{ marginLeft: "20px" }}
          aria-describedby={id}
          onClick={handleClick}
        />
        <Popover
          sx={{ marginTop: "10px" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Box padding="10px">
            <DropDownKey text="My Profile" iconName="bx:user-circle" />
            <DropDownKey text="Messages" iconName="jam:messages-alt-f" />
            <DropDownKey text="Logout" iconName="ri:logout-circle-line" />
          </Box>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default Header;
