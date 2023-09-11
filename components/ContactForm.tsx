"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { BsSend } from "react-icons/bs";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col w-full mx-auto md:max-w-3xl" onSubmit={handleSubmit}>
      <Input
        isRequired
        name="senderEmail"
        type="email"
        label="이메일"
        labelPlacement="outside"
        variant="bordered"
        maxLength={200}
        placeholder="이메일 주소를 입력하세요."
      />
      <Textarea
        name="message"
        placeholder="내용을 입력하세요."
        isRequired
        label="내용"
        variant="bordered"
        labelPlacement="outside"
        minRows={5}
        className="mt-6"
      />
      <Button type="submit" className="mt-4" endContent={<BsSend />}>
        보내기
      </Button>
    </form>
  );
};

export default ContactForm;
