"use client";
import React, { useActionState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
} from "@mui/material";
import Button from "./Button";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import PersonIcon from "@mui/icons-material/Person";
import { sendEMail } from "@/actions/contact-me";
import { initialFormState } from "@/helpers/constant";
import styles from "../app/page.module.css";
import { useFormStatus } from "react-dom";
import { formState } from "@/helpers/types";

const SubmitButton = () => {
  const formStatus = useFormStatus();

  return (
    <Button type="submit" form={"contact-me"} disabled={formStatus.pending}>
      {formStatus.pending ? "Sending..." : "Send"}
    </Button>
  );
};

interface EmailPopupProps {
  open: boolean;
  onClose: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ open, onClose }) => {
  const [formState, formAction] = useActionState<formState, FormData>(
    sendEMail,
    initialFormState
  );
  const { errors } = formState;

  useEffect(() => {
    if (formState.success) {
      onClose();
    }
  }, [formState, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      keepMounted={false}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.8)", // black overlay with opacity
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          color: "#2e2e2e",
        }}
      >
        Contact Me
      </DialogTitle>
      <DialogContent>
        <form action={formAction} id="contact-me">
          <TextField
            margin="dense"
            label="From"
            name="from"
            type="email"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "black",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <span className={styles["err"]}>{errors?.from}</span>
          <TextField
            margin="dense"
            label="Subject"
            name="subject"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "black",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <span className={styles["err"]}>{errors?.subject}</span>
          <TextField
            margin="dense"
            label="Sender's Name"
            name="senderName"
            fullWidth
            variant="outlined"
            //   value={formData.senderName}
            //   onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "black",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <span className={styles["err"]}>{errors?.senderName}</span>
          <TextField
            margin="dense"
            label="Message"
            name="body"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            //   value={formData.body}
            //   onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "black",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
            }}
          />
          <span className={styles["err"]}>{errors?.body}</span>
          <DialogActions sx={{ display: "flex", alignContent: "flex-start" }}>
            <SubmitButton />
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
