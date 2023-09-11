import { Button } from "@nextui-org/react";
import { BsSend } from "react-icons/bs";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <Button
      color="primary"
      variant="shadow"
      type="submit"
      className="mt-4 disabled:bg-gray-500"
      isLoading={pending}
      isDisabled={pending}
    >
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
};

export default SubmitButton;
