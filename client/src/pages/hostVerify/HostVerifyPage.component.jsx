import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { TextField } from "@mui/material";
import CustomButton from "../../components/custom-button/customButton.component";
import { Checkbox } from "@mui/material";
const HostVerify = () => {
  const [data, setData] = useState({
    phone: "",
    gender: "",
    idProof: "",
    profilePic: "",
    hostType: "",
    interest: "",
    hostBio: "",
    latitude: "",
    longitute: "",
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  }, []);
  const showPosition = (val) => {
    console.log("position");
    console.log(val.coords);
    setData({
      ...data,
      latitude: val.coords.latitude,
      longitute: val.coords.longitude,
    });
  };

  const [animal, setAnimal] = useState(false);
  const [plants, setPlants] = useState(false);
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (animal && plants) {
      console.log("here");
      setData((data) => ({ ...data, hostType: "both" }));
    } else {
      if (animal) {
        setData((data) => ({ ...data, hostType: "animals" }));
      } else if (plants) {
        setData((data) => ({ ...data, hostType: "plants" }));
      }
    }

    console.log(data);
  };

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log(result.info.url);
          return result.info.url;
        }
      }
    );
    widget.open();
  };
  const imageHandler1 = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log(result.info.url);
          setData({ ...data, profilePic: result.info.url });
        }
      }
    );
    widget.open();
  };
  const imageHandler2 = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log(result.info.url);
          setData({ ...data, idProof: result.info.url });
        }
      }
    );
    widget.open();
  };

  const checkHandler = (e) => {
    console.log(e.target.checked);

    if (e.target.name === "animals") {
      setAnimal(e.target.checked);
    } else {
      setPlants(e.target.checked);
    }
  };
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        p="0.5rem"
        h="auto"
        mt="2rem"
        mb="4rem"
        boxShadow="2px 2px 10px #D3D3D3"
        w="50%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
      >
        <Text mb="1rem" fontWeight="400" fontSize="2.5rem">
          Become a Host
        </Text>
        <TextField
          sx={{ marginBottom: "1rem", width: "80%" }}
          id="standard-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={(e) => onChangeHandler(e)}
        />
        <TextField
          sx={{ width: "80%" }}
          id="standard-basic"
          label="Gender"
          variant="outlined"
          name="gender"
          onChange={(e) => onChangeHandler(e)}
        />
        <CustomButton
          name="profile"
          onClick={() => imageHandler1()}
          sx={{ margin: "1rem" }}
        >
          Add your Profile Picture
        </CustomButton>
        <CustomButton
          onClick={() => imageHandler2()}
          sx={{ marginBottom: "1rem" }}
        >
          Add Your Proof of work
        </CustomButton>

        <Text>Where does your interest lie?</Text>
        <Flex justifyContent="center" alignItems="flex-start">
          <Flex justifyContent="center" alignItems="center">
            <Checkbox
              onChange={(e) => checkHandler(e)}
              label="animals"
              color="success"
              name="animals"
            />
            <Text>Animals</Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Checkbox
              onChange={(e) => checkHandler(e)}
              label="plants"
              color="success"
              name="plants"
            />
            <Text>Plants</Text>
          </Flex>
        </Flex>

        <TextField
          sx={{ width: "80%", marginBottom: "1rem" }}
          id="standard-basic"
          label="If Animal then which animal and if Plants then which all plants"
          variant="outlined"
          name="gender"
          name="interest"
          onChange={(e) => onChangeHandler(e)}
        />
        <textarea
          placeholder="Tell us something about yourself"
          name=""
          id=""
          cols="70"
          rows="10"
          name="hostBio"
          onChange={(e) => onChangeHandler(e)}
        ></textarea>
        <Flex justifyContent="center" alignItems="center" w="50%" mt="2rem">
          <CustomButton
            sx={{
              padding: "0.6rem",
              width: "80%",
              fontSize: "1.2rem",
            }}
            onClick={(e) => onSubmitHandler(e)}
          >
            Lessgoo
          </CustomButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HostVerify;
