import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactMe = () => {
  return (
    <section className="py-12 w-full">
      <div className="flex flex-col mx-auto items-center justify-center gap-y-12">
        <p className="text-2xl lg:text-3xl font-bold break-keep">
          궁금하신 사항이 있으시면 연락 바랍니다.
        </p>
        <Link href="/contact">
          <Button>연락하기</Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactMe;
