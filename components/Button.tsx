"use client";
import React from "react";
import { Button as MuiButton, styled } from "@mui/material";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button";
  form?: string;
  disabled?: boolean;
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

const Button = ({
  className,
  children,
  onClick,
  type = "button",
  form,
  disabled = false,
}: Props) => {
  return (
    <CustomButton
      className={className}
      onClick={onClick}
      variant="contained"
      type={type}
      form={form}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
