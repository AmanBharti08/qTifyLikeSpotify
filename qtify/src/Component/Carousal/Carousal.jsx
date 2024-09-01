import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import Card from "../../Common/Card";

export default function Carousal({ apiAlbum }) {
  const [list, setList] = useState([]);

  const fetchSong = () => {
    // const api = { apiAlbum };

    axios
      .get(apiAlbum)
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSong();
  }, []);

  return (
    <section>
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                image={item.image}
                follows={item.follows}
                title={item.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
