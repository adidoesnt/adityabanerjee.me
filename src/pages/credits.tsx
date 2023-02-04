import { Card, CardHeader, CardBody, Flex, Heading } from "@chakra-ui/react";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";
import {
  GithubCredits,
  LinkedinCredits,
  FacebookCredits,
  InstagramCredits,
  GmailCredits,
} from "@/assets";

export default function Credits() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"auto"}
      h={"100vh"}
      flexDir={"column"}
    >
      <NavBar pages={defaultNavBarProps} />
      <Heading mt={"5%"}>Acknowledgements</Heading>
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
  );
}
