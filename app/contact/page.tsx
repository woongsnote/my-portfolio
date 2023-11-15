import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import { css } from "@/styled-system/css";

export default async function Contact() {
  return (
    <>
      <PageTitle title="Contact me" />
      <p
        className={css({
          mb: "4",
          textAlign: "center",
          fontSize: { base: "sm", md: "md" },
        })}
      >
        <a
          href="mailto:woongsnote@gmail.com"
          className={css({ textDecoration: "underline" })}
        >
          이메일
        </a>
        로 직접 연락하시거나, 아래 폼으로 연락하실 수 있습니다.
      </p>
      <ContactForm />
    </>
  );
}
