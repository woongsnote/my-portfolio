"use server";
import { z } from "zod";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import { EmailTemplate } from "../emails/EmailTemplate";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  name: z.string({
    invalid_type_error: "Invalid Name",
  }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("senderEmail"),
    name: formData.get("senderName"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  const html = await renderAsync(
    EmailTemplate({
      senderEmail: senderEmail as string,
      senderName: senderName as string,
      message: message as string,
    }),
    { pretty: true },
  );
  try {
    const { data } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "woongsnote@gmail.com",
      subject: "Message from Contact Form",
      reply_to: senderEmail as string,
      html: html,
    });
    return { data, message: "이메일이 성공적으로 전송되었습니다!" };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
