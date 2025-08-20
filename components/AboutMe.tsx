import React from "react";
import style from "../app/page.module.css";
import { Box, Typography } from "@mui/material";
import ActionButtons from "./ActionButtons";

function AboutMe() {
  return (
    <Box className={style["about-me-wrapper"]}>
      <Box className={style["about-me"]}>
        <Typography variant="h3">About Me</Typography>
        <Typography variant={"body1"}>
          Hi, I’m Abhishek Tomar, a Software Engineer with 6+ years of
          experience in building scalable and user-focused web applications. I
          specialize in JavaScript, TypeScript, React, Next.js, and Node.js,
          with a strong background in designing optimized UIs, developing
          full-stack solutions, and creating impactful tools. I enjoy solving
          complex problems through clean architecture, performance-driven
          development, and modern technologies.
        </Typography>
        <ActionButtons />
      </Box>
    </Box>
  );
}

export default AboutMe;
