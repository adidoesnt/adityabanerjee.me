import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Center,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Template from "./template";
import { useTheme } from "./template";

export function ContactCard() {
  const { currentTheme } = useTheme();
  const bgColor = currentTheme ? "brand.700" : "brand.100";
  const textColor = currentTheme ? "brand.300" : "brand.700";

  return (
    <Card w={400} h={175} bgColor={bgColor} textColor={textColor}>
      <CardHeader textAlign={"center"} fontSize={"50px"}>
        <Heading>Contact me</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Center flexDir={"column"} fontSize={"15px"}>
          <Text fontSize={"20px"}>aditya_banerjee@icloud.com</Text>
          <Text fontSize={"20px"}>+65 9233 4061</Text>
        </Center>
      </CardBody>
    </Card>
  );
}

export default function Contact() {
  return (
    <Template>
      <ContactCard />
    </Template>
  );
}
