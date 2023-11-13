"use client";
import PageTitle from "@/components/PageTitle";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <PageTitle title="Contact me" />
      <p
        className={css({
          mb: "4",
          textAlign: "center",
          fontSize: { base: "sm", md: "md" },
        })}
      >
        <a
          href="mailto:woongsnote@gmail.com"
          className={css({ textDecoration: "underline" })}
        >
          이메일
        </a>
        로 직접 연락하시거나, 아래 폼으로 연락하실 수 있습니다.
      </p>
      <form
        action=""
        className={css({
          display: "flex",
          flexDir: "column",
          w: "full",
          p: "4",
          gap: "4",
        })}
      >
        <div
          className={css({
            display: "flex",
            w: "full",
            justifyContent: "space-between",
            gap: "4",
          })}
        >
          <input
            name="senderName"
            type="text"
            maxLength={20}
            placeholder="이름"
            className={css({
              rounded: "lg",
              py: "1",
              pl: "2",
              bgColor: { base: "#f1f4fa", _dark: "#262626" },
            })}
          />
          <input
            name="senderEmail"
            type="email"
            maxLength={200}
            placeholder="이메일"
            className={css({
              rounded: "lg",
              py: "1",
              pl: "2",
              bgColor: { base: "#f1f4fa", _dark: "#262626" },
            })}
          />
        </div>
        <textarea
          name="message"
          placeholder="내용"
          maxLength={5000}
          className={css({
            py: "1",
            pl: "2",
            rounded: "lg",
            minH: "32",
            bgColor: { base: "#f1f4fa", _dark: "#262626" },
          })}
        />
        <button
          type="submit"
          className={css({
            w: "full",
            bgColor: { base: "black", _dark: "#404040" },
            color: "white",
            rounded: "lg",
            py: "2",
            mx: "auto",
            cursor: "pointer",
          })}
        >
          보내기
        </button>
      </form>
    </motion.div>
  );
}
