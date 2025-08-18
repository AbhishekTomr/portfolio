import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import ProfilePic from "../assets/profile.png";
import { LinkedIn } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";

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
        <Link
          href={"https://www.linkedin.com/in/abhishektomar213/"}
          className={styles.icon}
        >
          <LinkedIn
            sx={{
              height: 30,
              width: 30,
            }}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abhishektomar213/"}
          className={styles.icon}
        >
          <Google
            sx={{
              height: 30,
              width: 30,
            }}
          />
        </Link>
        <Link href={"https://github.com/AbhishekTomr"} className={styles.icon}>
          <GitHub
            sx={{
              height: 30,
              width: 30,
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default IntroBox;
