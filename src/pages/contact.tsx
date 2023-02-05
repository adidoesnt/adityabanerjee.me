import { Card, CardBody, CardHeader, Text, Center, Divider } from "@chakra-ui/react";
import Template from "./template";

export default function Contact() {
  return (
    <Template>
      <Card w={400} h={175}>
        <CardHeader textAlign={"center"} fontSize={"25px"}>Contact me</CardHeader>
        <Divider />
        <CardBody >
          <Center flexDir={"column"} fontSize={"15px"}>
            <Text>aditya_banerjee@icloud.com</Text>
            <Text>+65 9233 4061</Text>
          </Center>
        </CardBody>
      </Card>
    </Template>
  );
}
