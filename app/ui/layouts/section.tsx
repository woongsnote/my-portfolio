

import { css } from "@/styled-system/css";
import { PageTitle } from "../components";


const SectionStyle = css({
  display: "flex",
  flexDir: "column",
  minH: "screen",
});

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={SectionStyle}>
      <PageTitle title={title} />
      {children}
    </section>
  );
};
