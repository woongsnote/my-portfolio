"use client";

import { Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "@/app/actions";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col w-full mx-auto md:max-w-3xl gap-2"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        toast.success("이메일이 성공적으로 전송되었습니다!");
      }}>
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
      <Input
        isRequired
        name="title"
        type="text"
        label="제목"
        labelPlacement="outside"
        variant="bordered"
        maxLength={200}
        placeholder="제목을 입력하세요."
      />

      <Textarea
        name="message"
        placeholder="내용을 입력하세요."
        isRequired
        label="내용"
        variant="bordered"
        labelPlacement="outside"
        minRows={5}
        maxLength={5000}
        className="mt-2"
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
