import { Button, styled } from "@mui/material";
import React from "react";

const CustomButtonContainer = styled(Button)(() => ({
  padding: "5px 20px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#4CAF50",
  },
}));

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
