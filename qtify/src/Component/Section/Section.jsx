import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../../Common/Card";
import axios from "axios";
const Section = () => {
  const [list, setList] = useState([]);
  const fetchSong = () => {
    const api = "https://qtify-backend-labs.crio.do/albums/top";

    axios
      .get(api)
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
    <Box sx={{ width: "100%", overflow: "hidden", padding: "0 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 style={{ color: "white" }}>Top Albums</h4>
        <h4 style={{ color: "#34C94B" }}>Collapse</h4>
      </div>

      <Grid sx={{ maxWidth: "100%" }} container spacing={3}>
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
    </Box>
  );
};

export default Section;
