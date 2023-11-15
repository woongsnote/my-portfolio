import { sendEmail } from "@/app/actions";
import { css } from "@/styled-system/css";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
const ContactForm = () => {
  const { pending } = useFormStatus();

  return (
    <form
      action={async (formData: FormData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email Send Success");
      }}
      className={css({
        display: "flex",
        flexDir: "column",
        w: "full",
        p: "4",
        gap: "4",
      })}>
      <div
        className={css({
          display: "flex",
          w: "full",
          justifyContent: "space-between",
          gap: "4",
          flexDir: { base: "column", md: "row" },
        })}>
        <input
          name='senderName'
          type='text'
          maxLength={20}
          placeholder='이름'
          className={css({
            rounded: "lg",
            w: "full",
            py: "1",
            pl: "2",
            bgColor: { base: "#f1f4fa", _dark: "#262626" },
          })}
        />
        <input
          name='senderEmail'
          type='email'
          maxLength={200}
          placeholder='이메일'
          className={css({
            rounded: "lg",
            w: "full",
            py: "1",
            pl: "2",
            bgColor: { base: "#f1f4fa", _dark: "#262626" },
          })}
        />
      </div>
      <textarea
        name='message'
        placeholder='내용'
        maxLength={5000}
        className={css({
          py: "1",
          pl: "2",
          rounded: "lg",
          minH: "32",
          bgColor: { base: "#f1f4fa", _dark: "#262626" },
        })}
      />
      <button
        type='submit'
        className={css({
          w: "full",
          bgColor: { base: "black", _dark: "#404040" },
          color: "white",
          rounded: "lg",
          py: "2",
          mx: "auto",
          cursor: "pointer",
        })}>
        {pending ? "전송 중입니다..." : "보내기"}
      </button>
    </form>
  );
};

export default ContactForm;
