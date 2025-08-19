"use client";
import React from "react";
import styles from "../app/page.module.css";
import { Box } from "@mui/material";
import Button from "./Button";
import { handleDownload } from "@/helpers/helpers";

type Props = {};

function ActionButtons({}: Props) {
  return (
    <Box className={styles["action-btn-wrap"]}>
      <Button onClick={handleDownload}>Download Resume</Button>
      <Button onClick={() => {}}>Contact Me</Button>
    </Box>
  );
}

export default ActionButtons;
