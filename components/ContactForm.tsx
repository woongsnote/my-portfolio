"use client";

import { sendEmail } from "@/app/actions";
import { toast } from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
      className='flex max-w-3xl mx-auto flex-col w-full p-4 gap-4'>
      <div className='flex w-full justify-between gap-4 flex-col md:flex-row'>
        <Input
          type='text'
          placeholder='이름'
          maxLength={20}
          className=''
          name='senderName'
          required
        />

        <Input
          type='email'
          placeholder='이메일'
          maxLength={200}
          className=''
          name='senderEmail'
          required
        />
      </div>
      <Textarea
        name='message'
        placeholder='내용'
        maxLength={5000}
        minLength={5}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
