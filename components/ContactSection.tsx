"use client";

import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="flex flex-col my-12 md:my-16 py-20 gap-4 text-white"
    >
      <SectionTitle title="Contact Me" />
      <p className="mb-4 text-center">
        <a href="mailto:woongsnote@gmail.com" className="underline">
          이메일
        </a>
        로 직접 연락하시거나,
        <br /> 아래 폼을 통해 연락하실 수 있습니다.
      </p>
      <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none text-black"
          name="senderEmail"
          type="email"
          required
          maxLength={200}
          placeholder="이메일 주소를 입력하세요. ex) test@gmail.com"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none text-black"
          name="message"
          placeholder="내용을 입력하세요."
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="bg-gray-800 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4 sm:w-fit"
        >
          전달하기
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
