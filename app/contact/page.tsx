import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
