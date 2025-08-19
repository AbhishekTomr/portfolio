"use client";
import { copyEmailToClipboard } from "@/helpers/helpers";
import { GitHub, Google, LinkedIn } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../app/page.module.css";

type Props = {};

const LinkIcons = (props: Props) => {
  return (
    <>
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
      <Tooltip title={"imabhishek111@gmail.com"}>
        <Google
          onClick={copyEmailToClipboard}
          className={styles.icon}
          sx={{
            height: 30,
            width: 30,
          }}
        />
      </Tooltip>
      <Link href={"https://github.com/AbhishekTomr"} className={styles.icon}>
        <GitHub
          sx={{
            height: 30,
            width: 30,
          }}
        />
      </Link>
    </>
  );
};

export default LinkIcons;
