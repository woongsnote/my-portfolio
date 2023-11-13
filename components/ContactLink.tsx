import { css } from "@/styled-system/css";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const ContactLink = () => {
  return (
    <Link
      href='/contact'
      className={css({
        px: "2",
        rounded: "lg",
        fontSize: { base: "sm", md: "md" },
        bgColor: "black",
        color: "white",
        _hover: { bgColor: "blue.500" },
      })}>
      Contact me
    </Link>
  );
};

export default ContactLink;
