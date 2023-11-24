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
        <span className="flex items-center gap-x-2">
          보내기 <BsSend />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
