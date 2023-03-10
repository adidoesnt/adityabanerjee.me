import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Template from "./template";
import { useTheme } from "./template";

export function AboutCard() {
  const { currentTheme } = useTheme();
  const bgColor = currentTheme ? "brand.700" : "brand.100";
  const textColor = currentTheme ? "brand.300" : "brand.700";

  return (
    <Card
      w={"75%"}
      textAlign={"center"}
      bgColor={bgColor}
      textColor={textColor}
    >
      <CardHeader fontSize={"50px"}>
        <Heading>About me</Heading>
      </CardHeader>
      <Divider />
      <CardBody
        fontSize={"20px"}
        w={"90%"}
        display={"flex"}
        flexDir={"column"}
        justifySelf={"center"}
        alignSelf={"center"}
      >
        <Text mt={"10px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text mt={"10px"}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </CardBody>
    </Card>
  );
}

export default function About() {
  return (
    <Template>
      <AboutCard />
    </Template>
  );
}
