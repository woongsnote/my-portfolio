import { css } from "@/styled-system/css";
import Link from "next/link";

const ContactLink = () => {
  return (
    <Link
      href="/contact"
      className={css({
        border: "1px solid gray",
        px: "2",
        rounded: "lg",
        fontSize: "md",
      })}
    >
      Hire me
    </Link>
  );
};

export default ContactLink;
