import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className='border-t h-full flex flex-col items-center justify-center px-2 py-4'>
        <p className='flex w-full h-2 items-center justify-center my-6'>
          © 2023.
          <span className='font-bold mx-2'> 문지웅 </span> All rights reserved.
        </p>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
