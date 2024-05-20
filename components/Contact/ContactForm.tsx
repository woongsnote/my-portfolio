"use client";

import sendEmail from "@/app/actions";
import { toast } from "sonner";
import { SubmitButton } from "@/components/Contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        const { message, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success(message);
      }}
      className="flex mx-auto flex-col max-w-3xl w-full p-10 gap-4 order-2 bg-black/50 text-black rounded-xl"
    >
      <h3 className="text-4xl text-accent font-bold">함께 일해요!</h3>
      <p className="text-white/60">
        커피챗 또는 미팅을 원하시면 아래 폼을 제출해서 연락처를 남겨주세요
      </p>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 py-4">
        <Input
          type="text"
          placeholder="이름"
          maxLength={20}
          className=""
          name="senderName"
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
