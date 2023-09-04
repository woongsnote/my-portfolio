"use client";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const EmailSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="flex flex-col px-4">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p className="mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <SocialLinks />
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="">Your Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" name="" id="" />
        <label>Message</label>
        <textarea />
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
