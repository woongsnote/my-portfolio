"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderName = formData.get("senderName");

  const senderEmail = formData.get("senderEmail");

  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid title",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  try {
    const { data } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "woongsnote@gmail.com",
      subject: "Message from Contact Form",
      reply_to: senderEmail as string,
      react: EmailTemplate({
        senderEmail: senderEmail as string,
        senderName: senderName as string,
        message: message as string,
      }),
    });
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
