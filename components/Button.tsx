"use client";
import React from "react";
import { Button as MuiButton, styled } from "@mui/material";
import { DOWNLOAD_TYPE } from "@/helpers/helpers";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick: (type: DOWNLOAD_TYPE) => void;
};

const CustomButton = styled(MuiButton)(() => ({
  backgroundColor: "#2e2e2e",
  color: "#ffffff",
  borderRadius: 0,
  textTransform: "none",
  fontWeight: "bold",
  padding: "8px 24px",
  marginRight: "10px",
  minWidth: "200px",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

const Button = ({ className, children, onClick }: Props) => {
  return (
    <CustomButton className={className} onClick={onClick} variant="contained">
      {children}
    </CustomButton>
  );
};

export default Button;
