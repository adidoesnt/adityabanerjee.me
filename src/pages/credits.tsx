import { Card, CardHeader, CardBody, Flex, Heading } from "@chakra-ui/react";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";
import {
  GithubCredits,
  LinkedinCredits,
  FacebookCredits,
  InstagramCredits,
  GmailCredits,
} from "@/assets";
import Template from "./template";

export default function Credits() {
  return (
    <Template>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Card
          mt={"5%"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <CardHeader fontSize={"25px"}>Icons</CardHeader>
          <CardBody>
            <GithubCredits fontSize={"15px"} />
            <LinkedinCredits fontSize={"15px"} />
            <FacebookCredits fontSize={"15px"} />
            <InstagramCredits fontSize={"15px"} />
            <GmailCredits fontSize={"15px"} />
          </CardBody>
        </Card>
      </Flex>
    </Template>
  );
}
