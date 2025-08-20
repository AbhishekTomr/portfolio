import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import ProfilePic from "../assets/profile.png";
import LinkIcons from "./LinkIcons";
import ContactMe from "./ContactMe";

const IntroBox = () => {
  return (
    <Box className={styles["intro-box-wrapper"]}>
      <Image
        src={ProfilePic}
        alt="profile-picture"
        height={350}
        width={350}
        className={styles["profile-pic"]}
      />
      <Typography variant={"h3"} className={styles["main-heading"]}>
        Abhishek Tomar
      </Typography>
      <Typography variant={"h5"} className={styles["sub-heading"]}>
        {`< Software Developer />`}
      </Typography>
      <Box className={styles["contact-me-options"]}>
        <LinkIcons />
      </Box>
      <ContactMe />
    </Box>
  );
};

export default IntroBox;
