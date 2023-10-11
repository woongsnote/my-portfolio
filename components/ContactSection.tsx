import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col py-20 gap-4"
    >
      <SectionTitle title="Contact Me" />
      <p className="mb-4 text-center text-sm md:text-lg">
        <a href="mailto:woongsnote@gmail.com" className="underline">
          이메일
        </a>
        로 직접 연락하시거나, 아래 폼으로 연락하실 수 있습니다.
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
