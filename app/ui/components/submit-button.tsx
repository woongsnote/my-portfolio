"use client";

import { css } from "@/styled-system/css";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={css({
        w: "full",
        bgColor: { base: "black", _dark: "#404040", _disabled: "gray.800" },
        color: "white",
        rounded: "lg",
        py: "2",
        mx: "auto",
        cursor: { base: "pointer", _disabled: "progress" },
      })}
    >
      {pending ? "전송 중입니다..." : "보내기"}
    </button>
  );
};
