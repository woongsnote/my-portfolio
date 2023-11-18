import { css } from "@/styled-system/css";
import { ContactForm } from "@/components/contact-form";
import { Suspense } from "react";
import { SectionTitle } from "../components/section-title";

export const ContactSection = () => {
  return (
    <section id="contact" className={contactSectionStyle}>
      <SectionTitle title="Contact Me" />
      <p className={contactInfoStyle}>
        <a
          href="mailto:woongsnote@gmail.com"
          className={css({ textDecoration: "underline" })}
        >
          이메일
        </a>
        로 직접 연락하시거나, 아래 폼으로 연락하실 수 있습니다.
      </p>
      <Suspense>
        <ContactForm />
      </Suspense>
    </section>
  );
};

const contactSectionStyle = css({
  display: "flex",
  flexDir: "column",
  minH: "screen",
  alignItems: "center",
  justifyContent: "center",
});

const contactInfoStyle = css({
  my: "4",
  textAlign: "center",
  fontSize: { base: "sm", md: "md" },
  wordBreak: "keep-all",
});
