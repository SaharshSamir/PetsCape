import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import { PetPostContainer } from './petPost.styles';

const PetPost = ({ imageUrl,post }) => {
  const [spanNumber, setspanNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // const nums = [26, 33, 45, 40, 37];
    const nums = [19, 26, 22, 26, 30];
    const idx = Math.floor(Math.random() * nums.length);
    setspanNumber(nums[idx]);
  }, []);

  return (
    <PetPostContainer
      spanNum={spanNumber}
      url={post.image}
    //   onClick={() => {
    //     navigate(`/project/${project._id}`);
    //   }}
    >
      {/* <Icon icon="clarity:bookmark-line" className="bookmarkIcon" color="#fff"/> */}

      <div className="project-info-bar">
        <p className="postTitle">{post?.caption}</p>
        <span className="star-container">{post?.likes || 0} <Icon icon="akar-icons:heart" fontSize="0.8em" color="#fff"/> </span>
      </div>
    </PetPostContainer>
  );
};

export default PetPost;
