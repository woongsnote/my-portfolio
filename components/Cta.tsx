import ContactButton from "./ContactButton";

const Cta = () => {
  return (
    <section className='py-12'>
      <div className='flex flex-col mx-auto items-center justify-center gap-y-2.5'>
        <h2>Prepare to turn your idea into reality? I&apos;m here to help</h2>
        <ContactButton />
      </div>
    </section>
  );
};

export default Cta;
