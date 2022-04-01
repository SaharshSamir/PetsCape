import React, { useState, useEffect } from "react";
import "./HostProfile.css";
import RoomIcon from "@mui/icons-material/Room";
import Rating from "@mui/material/Rating";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HostFormModal from "./HostFormModal";
import useHosts from "../../hooks/useHosts";
import useAuth from "../../hooks/useAuth";
import { Box } from "@chakra-ui/react";

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
      // p={"0.5rem"}
    >
      <HostFormModal state={state} toggleModal={toggleImageModal} />
      <div className="header">
        <div className="dp-container">
          <img src={User?.profilePic} alt="display pic" />
        </div>
        <div className="details-container">
          <div className="username-location-container">
            <div className="username-verified-container">
              <p className="username">{User?.name}</p>
              <VerifiedUserIcon
                sx={{ color: "#FF9800", marginLeft: "2rem" }}
                fontSize="large"
              />
            </div>
            <span className="location-container">
              <RoomIcon sx={{ color: "#666666" }} />{" "}
              <p className="location" style={{ color: "#666666" }}>
                Tilekar Nagar, Kondhwa - 400m
              </p>
            </span>
          </div>
          <div className="credibility">
            <Rating name="read-only" value={4} readOnly size="large" />
            <span className="top-rated-span">
              <BookmarkIcon sx={{ color: "#156FAF" }} />
              Top rated
            </span>
          </div>
        </div>
        <div className="book-btn-container">
          {!requested ? (
            <>
              <button
                align="center"
                onClick={() => {
                  setState(!state);
                }}
                className="book-me-btn"
              >
                Book Me
              </button>
            </>
          ) : (
            <>
              <h1 align="center">Your Request Has Been Sent!</h1>
            </>
          )}
        </div>
      </div>
    </Box>
  );
};

export default HostProfile;
