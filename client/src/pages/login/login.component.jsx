import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import loginImg from "../../assets/loginImg.png";
import { Text } from "@chakra-ui/layout";
import { TextField } from "@mui/material";
import CustomButton from "../../components/custom-button/customButton.component";
const Login = () => {
  return (
    <Flex>
      <Box w="50%" h="100vh">
        <Image h="100vh" w="100%" src={loginImg}></Image>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="50%"
        h="100vh"
      >
        <Flex
          p="0.5rem"
          h="70vh"
          boxShadow="2px 2px 10px #D3D3D3"
          w="60%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <Text fontWeight="400" fontSize="2.5rem">
            Login
          </Text>
          <TextField
            sx={{ marginBottom: "1rem", width: "80%" }}
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{ width: "80%" }}
            id="standard-basic"
            label="Pawsword"
            variant="outlined"
          />
          <Box w="50%" mt="2rem">
            <CustomButton
              sx={{
                padding: "0.6rem",
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              Login
            </CustomButton>
          </Box>
          <Flex mt="4rem" alignItems="flex-end">
            Not a pawember?{" "}
            <span>
              <a style={{ marginLeft: "0.2rem" }} href="/signup">
                {" "}
                Signup here
              </a>
            </span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
