"use client";

import { css } from "@/styled-system/css";
import { useFormStatus } from "react-dom";
import { BsSend } from "react-icons/bs";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={SubmitButtonStyle}>
      {pending ? (
        "전송 중입니다..."
      ) : (
        <>
          보내기 <BsSend />
        </>
      )}
    </button>
  );
};

const SubmitButtonStyle = css({
  w: "full",
  bgColor: { base: "black", _dark: "#404040", _disabled: "gray.800" },
  color: "white",
  rounded: "lg",
  py: "2",
  mx: "auto",
  cursor: { base: "pointer", _disabled: "progress" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
});
