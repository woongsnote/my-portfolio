"use client";

import { useFormStatus } from "react-dom";
import { BsSend } from "react-icons/bs";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending}>
      {pending ? (
        "전송 중입니다..."
      ) : (
        <>
          보내기 <BsSend />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
