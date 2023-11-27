import ContactButton from "./ContactButton";

const Cta = () => {
  return (
    <section className='py-12 w-full'>
      <div className='flex flex-col mx-auto items-center justify-center gap-y-12'>
        <h2 className="text-3xl font-bold">추가적으로, 궁금하신 사항이 있으시면 연락 바랍니다. </h2>
        <ContactButton />
      </div>
    </section>
  );
};

export default Cta;
