"use server";
import nodemailer from "nodemailer";

import { initialErrorState, initialFormState } from "@/helpers/constant";
import { formState } from "@/helpers/types";

export async function sendMail(
  previousState: formState,
  formData: FormData,
  reset?: boolean
) {
  if (reset) {
    return initialFormState;
  }
  const errors = { ...initialErrorState };
  try {
    const from = formData.get("from");
    const subject = formData.get("subject");
    const senderName = formData.get("senderName");
    const body = formData.get("body");
    if (!from) {
      errors.from = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(from as string)) {
      errors.from = "Invalid email format";
    }

    if (!subject) {
      errors.subject = "Subject is required";
    }

    if (!senderName) {
      errors.senderName = "Sender name is required";
    }

    if (!body) {
      errors.body = "Message body is required";
    }

    if (Object.values(errors).some((msg) => msg && msg.length > 0)) {
      return { ...previousState, errors, success: false };
    }
    await sendEmailViaNode(
      from as string,
      subject as string,
      senderName as string,
      body as string
    );

    return { success: true, errors };
    // logic to send mail.
  } catch (err: unknown) {
    console.error(err);
    throw new Error(err);
  }
}

export async function sendEmailViaNode(
  from: string,
  subject: string,
  senderName: string,
  body: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from,
    to: process.env.OWNER_EMAIL,
    subject: `Mail from : ${senderName}, Subject: ${subject}`,
    text: body,
  });

  console.log("mail sent successfully!!!");
  return;
}
