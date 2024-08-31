import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ image,follows,title }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.group}>
        <img className={styles.image} src={image} alt="" />
        <Chip
          label={follows}
          sx={{
            width: "71px",
            height: "23px",
            padding: "4px 8px",
            backgroundColor: "black",
            color: "white",
            fontSize: "10px",
            fontWeight: "400",
            borderRadius: "10px",
            lineHeight: "15px",
          }}
          className={styles.chip}
        />
      </div>
      <div className={styles.name}>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Card;
