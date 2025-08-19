"use client";
import React from "react";
import styles from "../app/page.module.css";
import { Box } from "@mui/material";
import Button from "./Button";
import { DOWNLOAD_TYPE, handleDownload } from "@/helpers/helpers";

type Props = {};

function ActionButtons({}: Props) {
  return (
    <Box className={styles["action-btn-wrap"]}>
      <Button onClick={handleDownload.bind(null, DOWNLOAD_TYPE.RESUME)}>
        Resume
      </Button>
      <Button onClick={handleDownload.bind(null, DOWNLOAD_TYPE.COVER_LETTER)}>
        Cover Letter
      </Button>
    </Box>
  );
}

export default ActionButtons;
