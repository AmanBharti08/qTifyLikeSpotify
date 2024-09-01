import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../../Common/Card";
import axios from "axios";
const Section = ({ title, apiAlbum }) => {
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
    <Box sx={{}}>
      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ color: "white" }}>{title}</h4>
          <h4 style={{ color: "#34C94B" }}>Collapse</h4>
        </div>

        <Grid sx={{ maxWidth: "100%" }} container spacing={6}>
          {list.map((item, index) => {
            return (
              <Grid item key={index}>
                <Card
                  image={item.image}
                  follows={item.follows}
                  title={item.title}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </Box>
  );
};

export default Section;
