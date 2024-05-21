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
      className="flex mx-auto flex-col max-w-3xl w-full p-4 lg:p-10 gap-4 order-2 bg-black/50 text-black rounded-xl">
      <div className="break-keep text-center flex flex-col gap-4">
        <h3 className="text-4xl text-accent font-bold">함께 일해요!</h3>
        <p className="text-white/60">
          커피챗 또는 미팅을 원하시면 아래 폼을 제출하시거나,
          <br />
          <a href="mailto:woongsnote@gmail.com">woongsnote@gmail.com</a>으로
          연락 주시면 됩니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 py-4">
        <Input
          type="text"
          placeholder="이름을 입력하세요."
          maxLength={20}
          className=""
          name="senderName"
          required
        />
        <Input
          type="email"
          placeholder="이메일을 입력하세요."
          maxLength={200}
          className=""
          name="senderEmail"
          required
        />
      </div>
      <Textarea
        name="message"
        placeholder="남기실 메시지를 입력하세요."
        maxLength={5000}
        minLength={5}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
