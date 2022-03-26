import React, { useState, useEffect } from "react";
import "./HostProfile.css";
import RoomIcon from "@mui/icons-material/Room";
import Rating from "@mui/material/Rating";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DummyDp from "../../assets/DummyDp.png";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HostFormModal from "./HostFormModal";

import { Flex } from "@chakra-ui/layout";
import useHosts from "../../hooks/useHosts";
const host = {
  displayPic: DummyDp,
  username: "Sarah Collins",
  location: "Tilekar Nagar, Kondhwa - 400m",
  rating: 4,
  description:
    "Hello! i’m Sarah, your local friendly neighborhood pet enthusiast. I’ve always had a special attachment to animals and the rascals seem to love me too. I own two dogs and 4 cats. I have always been around animals since i was a kid. If you are looking for someone to take care of your little trouble-maker, i’m the perfect person for the job. Feel free to hit me up.",
  totalEarned: "20k",
  totalJobs: 47,
  totalHours: 117,
  jobs: [
    {
      title: "2 Dogs for 2 hours",
      reviewStar: 4,
      date: "12 Mar, 2022",
      review:
        "Very proffessional and friendly. She taok very good care of my dogs and even went above and beyond to take them for a walk. Would 100% reconsider hiring her again.",
      totalEarned: 300,
      ratePerHour: 150,
      hours: 2,
    },
    {
      title: "1 Dog for 3 hours",
      reviewStar: 5,
      date: "12 Mar, 2022",
      review:
        "Very proffessional and friendly. She taok very good care of my dogs and even went above and beyond to take them for a walk. Would 100% reconsider hiring her again.",
      totalEarned: 450,
      ratePerHour: 150,
      hours: 3,
    },
    {
      title: "2 Dogs for 2 hours",
      reviewStar: 4,
      date: "12 Mar, 2022",
      review:
        "Very proffessional and friendly. She taok very good care of my dogs and even went above and beyond to take them for a walk. Would 100% reconsider hiring her again.",
      totalEarned: 450,
      ratePerHour: 150,
      hours: 2,
    },
  ],
};

const HostProfile = () => {
  const { getSingleHost } = useHosts();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getSingleHost(id).then((res) => setUser(res));
  }, []);
  const toggleImageModal = () => {
    setState(!state);
  };
  const [state, setState] = useState(false);
  return (
    <div>
      <HostFormModal state={state} toggleModal={toggleImageModal} />
      <div className="header">
        <div className="dp-container">
          <img src={user?.profilePic} alt="display pic" />
        </div>
        <div className="details-container">
          <div className="username-location-container">
            <div className="username-verified-container">
              <p className="username">{user?.name}</p>
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
            <Rating
              name="read-only"
              value={host.rating}
              readOnly
              size="large"
            />
            <span className="top-rated-span">
              <BookmarkIcon sx={{ color: "#156FAF" }} />
              Top rated
            </span>
          </div>
        </div>
        <div className="book-btn-container">
          <button onClick={() => setState(!state)} className="book-me-btn">
            Book Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
