import React, { useEffect } from "react";
import Styles from "./Songs.module.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../Common/Card";
// import required modules
import { Navigation } from "swiper/modules";

import { useState } from "react";

const Songs = () => {
  const [value, setValue] = React.useState("1");
  const [genre, setGenre] = useState([]);
  const [songs, setSongs] = useState([]);

  const fetchGenre = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then((response) => {
        setGenre(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchSongs = () => {
    axios.get("https://qtify-backend-labs.crio.do/songs").then((response) => {
      setSongs(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchGenre();
    fetchSongs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={Styles.main}>
      <h4>Songs</h4>
      <div className={Styles.container}>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="white"
                indicatorColor="secondary"
              >
                <Tab label="All" value="1" />
                {genre.map((item, index) => {
                  return <Tab label={item.label} value={item.key} />;
                })}
              </TabList>
            </Box>

            <TabPanel value="1">
              <Swiper
                slidesPerView={7}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {songs.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Card
                        image={item.image}
                        follows={item.likes}
                        title={item.title}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </TabPanel>

            <TabPanel value="2">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Songs;
