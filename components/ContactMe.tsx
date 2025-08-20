"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import Button from "./Button";
import EmailPopup from "./ContactMeEmail";

function ContactMe() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles["contact-me-wrap"]}>
      <Button
        className={styles["contact-me-btn"]}
        onClick={() => {
          setOpen(true);
        }}
      >
        Contact Me
      </Button>
      {open && <EmailPopup open={open} onClose={onClose} />}
    </div>
  );
}

export default ContactMe;
