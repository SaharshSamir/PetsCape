import React from "react";
import { Image, Box } from "@chakra-ui/react";

import { Modal } from "@mui/material";
import { Flex } from "@chakra-ui/layout";
import { TextField } from "@mui/material";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import CustomButton from "../../components/custom-button/customButton.component";
const HostFormModal = ({ state, toggleModal, url }) => {
  const onChangeHandler = () => {};
  return (
    <Modal open={state} onClose={toggleModal}>
      <Box
        width="50vw"
        height="auto"
        position="absolute"
        padding="1rem"
        borderRadius="20px"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        backgroundColor="white"
      >
        <Flex justify="center" alignItems="center" flexDirection="column">
          <Box fontSize="1.4rem" fontWeight="400" m="1.2rem">
            Book Your Host!
          </Box>
          <TextField
            sx={{ marginBottom: "1rem", width: "80%" }}
            id="standard-basic"
            label="Title"
            variant="outlined"
            name="title"
            onChange={(e) => onChangeHandler(e)}
          />
          <TextField
            sx={{ marginBottom: "1rem", width: "80%" }}
            id="standard-basic"
            label="Description"
            variant="outlined"
            name="description"
            onChange={(e) => onChangeHandler(e)}
          />
          <Flex justify="center" alignItems="center" flexDirection="column">
            <Flex justify="center" alignItems="center">
              <Text m="0.5rem">Start date: </Text>
              <Input
                boxShadow="2px 2px 10px #D3D3D3"
                borderRadius="5px"
                border="none"
                fontSize="1.2rem"
                type="date"
              />
              <Text m="0.5rem">Start time</Text>
              <Input
                boxShadow="2px 2px 10px #D3D3D3"
                borderRadius="5px"
                border="none"
                fontSize="1.2rem"
                type="time"
              />
            </Flex>
            <Flex justify="center" alignItems="center">
              <Text m="0.5rem">End Date</Text>
              <Input
                boxShadow="2px 2px 10px #D3D3D3"
                borderRadius="5px"
                border="none"
                fontSize="1.2rem"
                type="date"
              />
              <Text m="0.5rem">End Date</Text>
              <Input
                boxShadow="2px 2px 10px #D3D3D3"
                borderRadius="5px"
                border="none"
                fontSize="1.2rem"
                type="time"
              />
            </Flex>
          </Flex>
          <CustomButton sx={{ marginTop: "1.2rem", fontSize: "1.2rem" }}>
            Book now!
          </CustomButton>
        </Flex>
      </Box>
    </Modal>
  );
};
export default HostFormModal;
