"use client";

import { sendEmail } from "@/app/actions";
import { toast } from "sonner";
import { SubmitButton } from "@/components/Contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("이메일이 성공적으로 전송되었습니다!");
      }}
      className="flex max-w-3xl mx-auto flex-col w-full p-4 gap-4 order-2 bg-black/50">
      <div className="flex w-full justify-between gap-4 flex-col">
        <Input
          type="text"
          placeholder="이름"
          maxLength={20}
          className=""
          name="senderName"
          required
        />
        <Input
          type="tel"
          placeholder="연락처"
          maxLength={20}
          className=""
          name="senderPhoneNumber"
          required
        />
        <Input
          type="email"
          placeholder="이메일"
          maxLength={200}
          className=""
          name="senderEmail"
          required
        />
      </div>
      <Textarea
        name="message"
        placeholder="내용"
        maxLength={5000}
        minLength={5}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
