import { ContactForm, ContactInfo } from "@/components/Contact";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 container min-h-full lg:py-12">
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
