import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface EmailProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

export const EmailTemplate = ({
  senderName,
  senderEmail,
  message,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body className="bg-gray-200">
        <Container className="bg-white mx-auto pt-10 pb-4 px-12">
          <Heading>
            You received the following message from {senderName} by the contact
            form
          </Heading>
          <Text className="text-lg leading-5">{message}</Text>
          <Text className="text-lg leading-5">
            From,
            <br />
            {senderName}
          </Text>
          <hr />
          <Text className="text-lg leading-5">
            The sender&apos;s email is: {senderEmail}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
