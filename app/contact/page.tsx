"use client";
import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <PageTitle title='Contact me' />
      <p
        className={css({
          mb: "4",
          textAlign: "center",
          fontSize: { base: "sm", md: "md" },
        })}>
        <a
          href='mailto:woongsnote@gmail.com'
          className={css({ textDecoration: "underline" })}>
          이메일
        </a>
        로 직접 연락하시거나, 아래 폼으로 연락하실 수 있습니다.
      </p>
      <ContactForm />
    </motion.div>
  );
}
