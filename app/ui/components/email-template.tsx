import { css } from "@/styled-system/css";
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
  const main = css({ bgColor: "gray.200" });
  const container = css({
    mx: "auto",
    padding: "20px 0 48px",
    bgColor: "white",
  });
  const paragraph = css({ fontSize: "lg", lineHeight: "md" });
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body className={main}>
        <Container className={container}>
          <Heading>
            You received the following message from {senderName} by the contact
            form
          </Heading>
          <Text className={paragraph}>{message}</Text>
          <Text className={paragraph}>
            From,
            <br />
            {senderName}
          </Text>
          <hr />
          <Text className={paragraph}>
            The sender&apos;s email is: {senderEmail}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
