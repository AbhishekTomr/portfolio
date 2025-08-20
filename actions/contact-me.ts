"use server";
import nodemailer from "nodemailer";

import { initialErrorState } from "@/helpers/constant";
import { formState } from "@/helpers/types";

export async function sendEMail(
  previousState: formState,
  formData: FormData
): Promise<formState> {
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

    if (!subject) errors.subject = "Subject is required";
    if (!senderName) errors.senderName = "Sender name is required";
    if (!body) errors.body = "Message body is required";

    if (Object.values(errors).some((msg) => msg && msg.length > 0)) {
      return { ...previousState, errors, success: false };
    }

    await sendEmailViaNode(
      from as string,
      subject as string,
      senderName as string,
      body as string
    );

    return { ...previousState, success: true, errors };
  } catch (err) {
    console.error(err);
    return {
      ...previousState,
      success: false,
      errors: { ...errors, body: "Something went wrong" },
    };
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
