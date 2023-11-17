import { sendEmail } from "@/app/actions";
import { css } from "@/styled-system/css";
import { SubmitButton } from "../components";
import toast from "react-hot-toast";

export const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server"
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }
        console.log(data);
        toast.success("이메일이 성공적으로 전송되었습니다!");
      }}
      className={css({
        display: "flex",
        flexDir: "column",
        w: "full",
        p: "4",
        gap: "4",
      })}
    >
      <div
        className={css({
          display: "flex",
          w: "full",
          justifyContent: "space-between",
          gap: "4",
          flexDir: { base: "column", md: "row" },
        })}
      >
        <input
          name="senderName"
          type="text"
          maxLength={20}
          placeholder="이름"
          className={css({
            rounded: "lg",
            w: "full",
            py: "1",
            pl: "2",
            bgColor: { base: "#f1f4fa", _dark: "#262626" },
          })}
        />
        <input
          name="senderEmail"
          type="email"
          maxLength={200}
          placeholder="이메일"
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
        name="message"
        placeholder="내용"
        maxLength={5000}
        className={css({
          py: "1",
          pl: "2",
          rounded: "lg",
          minH: "32",
          bgColor: { base: "#f1f4fa", _dark: "#262626" },
        })}
      />
      <SubmitButton />
    </form>
  );
};
