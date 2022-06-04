import React, { useState, useEffect } from "react";
import "./HostProfile.css";
import RoomIcon from "@mui/icons-material/Room";
import Rating from "@mui/material/Rating";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HostFormModal from "./HostFormModal";
import useHosts from "../../hooks/useHosts";
import useAuth from "../../hooks/useAuth";
import { Box, Text } from "@chakra-ui/react";
import { Avatar } from "@mui/material";
import CustomButton from "../../components/custom-button/customButton.component";

const HostProfile = () => {
  const { user } = useAuth();
  const { getSingleHost } = useHosts();
  const [User, setUser] = useState(null);
  const [requested, setRequested] = useState(false);
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    let isBooked = user.userRequest.some((u) => u.hostId == id);
    setRequested(isBooked);
    getSingleHost(id).then((res) => setUser(res));
  }, [id]);

  const toggleImageModal = () => {
    setState(!state);
  };
  const [state, setState] = useState(false);
  return (
    <Box
      borderRadius={"10px"}
      boxShadow={"2px 2px 10px #D3D3D3"}
      margin={"5%"}
      padding="20px"
      width="60%"
      marginX="auto"
      // p={"0.5rem"}
    >
      <HostFormModal state={state} toggleModal={toggleImageModal} />
      <Box display="flex" gap="30px">
        <Avatar src={User?.profilePic} sx={{ width: 200, height: 200 }} />
        <Box display="flex" flexDirection="column">
          <Text fontSize="3em">
            {User?.name}{" "}
            <VerifiedUserIcon
              sx={{ color: "#FF9800", marginLeft: "2rem" }}
              fontSize="large"
            />
          </Text>
          <Text color="#a3a3a3">250m from you</Text>
          <Rating value={4} readOnly size="large" sx={{ marginTop: "20px" }} />
          <Box marginTop="20px">
            {!requested ? (
              <CustomButton
                simple
                onClick={() => {
                  setState(!state);
                }}
              >
                BOOK
              </CustomButton>
            ) : (
              <CustomButton disabled={true} simple>
                ALREADY BOOKED
              </CustomButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HostProfile;
