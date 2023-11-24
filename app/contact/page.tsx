import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";
import contactImage from "@/public/contact.svg";

export default function Contact() {
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center justify-between p-4 mx-auto w-full">
        <div className="flex-1">
          <PageTitle title="Contact Me" />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col mx-auto">
          <Image
            src={contactImage}
            alt="contact"
            className="rounded-xl w-72 h-72"
            priority
          />
          <p className="text-gray-300 text-sm">
            Image by{" "}
            <a href="https://www.freepik.com/free-vector/colorful-illustration-programmer-working_5483064.htm#page=3&query=software%20engineer&position=4&from_view=search&track=ais&uuid=2ceb6fbc-06c5-493b-b910-cd7fb588a458">
              Freepik
            </a>
          </p>
        </div>
      </div>
      <section className="flex">
        <div className="flex-1 flex flex-col gap-y-8  text-xl font-bold lg:text-2xl">
          <p className="flex items-center gap-x-2">
            <RiMailLine className="text-primary" /> woongsnote@gmail.com
          </p>

          <p className="flex items-center gap-x-2">
            <RiInstagramLine className="text-primary" /> @woongsnote
          </p>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </section>
    </section>
  );
}
