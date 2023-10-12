import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
const ContactButton = () => {
  return (
    <Link
      href="#contact"
      className="px-6 py-3 w-full lg:w-fit flex flex-row items-center justify-center text-center gap-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
      Contact Me <RiArrowRightLine />
    </Link>
  );
};

export default ContactButton;
