import { css } from "@/styled-system/css";
import Link from "next/link";

const ContactLink = () => {
  return (
    <Link
      href="/contact"
      className={css({
        px: "2",
        rounded: "lg",
        fontSize: { base: "sm", md: "md" },
        bgColor: { base: "black", _dark: "#373737" },
        color: "white",
        _hover: { bgColor: "blue.500" },
      })}
    >
      Contact me
    </Link>
  );
};

export default ContactLink;
