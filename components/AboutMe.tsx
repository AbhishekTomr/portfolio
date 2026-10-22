import React from 'react';
import style from '../app/page.module.css';
import { Box, Typography } from '@mui/material';
import ActionButtons from './ActionButtons';

function AboutMe() {
  return (
    <Box className={style['about-me-wrapper']}>
      <Box className={style['about-me']}>
        <Typography variant="h3">About Me</Typography>
        <Typography variant={'body1'}>
          Hi, I’m Abhishek Tomar, a Senior Software Engineer with 7+ years of
          experience building scalable, high-performance web applications. I
          specialize in JavaScript, TypeScript, React, and Next.js, with
          experience developing intuitive user interfaces, browser extensions,
          and data-driven applications. I enjoy solving complex engineering
          challenges, designing maintainable architectures, and turning ideas
          into reliable, user-focused products.
        </Typography>
        <ActionButtons />
      </Box>
    </Box>
  );
}

export default AboutMe;
