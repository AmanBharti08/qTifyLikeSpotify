import React from "react";
import Section from "../Section/Section";
import styles from "./Albums.module.css";

const Albums = () => {
  return (
    <div className={styles.container}>
      <Section
        title={"Top Albums"}
        apiAlbum={"https://qtify-backend-labs.crio.do/albums/top"}
      />
      <Section
        title={"New Albums"}
        apiAlbum={"https://qtify-backend-labs.crio.do/albums/new"}
      />
    </div>
  );
};

export default Albums;
