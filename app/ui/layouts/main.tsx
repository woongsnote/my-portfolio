import { container } from "@/styled-system/patterns";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={container()}>{children}</div>;
};
