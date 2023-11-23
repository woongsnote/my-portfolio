const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='text-3xl lg:text-5xl text-center font-black drop-shadow-lg'>
      {title}
    </h2>
  );
};

export default SectionTitle;
