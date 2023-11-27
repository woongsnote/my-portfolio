import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import contactImage from "@/public/contact.svg";
import ContactLink from "@/components/ContactLink";

export default function Contact() {
  return (
    <>
      <section className='flex items-center justify-between p-4 mx-auto w-full container'>
        <div className='flex-1'>
          <PageTitle title="Let's Work Together" />
        </div>
        <div className='hidden md:flex flex-1 items-center justify-center flex-col mx-auto'>
          <Image
            src={contactImage}
            alt='contact'
            className='rounded-xl w-72 h-72'
            priority
          />
          <p className='text-gray-300 text-sm'>
            Image by{" "}
            <a href='https://www.freepik.com/free-vector/colorful-illustration-programmer-working_5483064.htm#page=3&query=software%20engineer&position=4&from_view=search&track=ais&uuid=2ceb6fbc-06c5-493b-b910-cd7fb588a458'>
              Freepik
            </a>
          </p>
        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-y-8 container'>
        <div className='flex-1 flex flex-col gap-y-8 text-xl font-bold lg:text-2xl px-2'>
          <ContactLink
            link='mailto:woongsnote@gmail.com'
            icon={<RiMailLine size={32} />}
            text='woongsnote@gmail.com'
          />
          <ContactLink
            link='https://linkedin.com/in/woongsnote'
            icon={<RiLinkedinBoxFill size={32} />}
            text='woongsnote'
          />
        </div>
        <div className='flex-1'>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
