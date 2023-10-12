import { Button } from "@nextui-org/react";
import { BsSend } from "react-icons/bs";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      color="primary"
      variant="shadow"
      type="submit"
      className="mt-4 disabled:bg-gray-500 w-full sm:w-fit justify-center"
      isLoading={pending}
      isDisabled={pending}>
      {pending ? (
        <>전송중</>
      ) : (
        <>
          보내기
          <BsSend />
        </>
      )}
    </Button>
  );
}
