import Link from "next/link";
import { Button } from "./ui/button";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactButton = () => {
  return (
    <Link href='/contact' className='flex items-center'>
      <Button className='gap-x-2 text-lg mx-auto w-full hover:shadow-xl'>
        연락하기 <RiSendPlaneFill size={18} />
      </Button>
    </Link>
  );
};

export default ContactButton;
