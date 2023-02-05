import Head from "next/head";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CenteredGridItem from "@/components/CenteredGridItem";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";
import { Portrait } from "@/assets";
import Template from "./template";

export type HeaderProps = {
  homePage?: boolean;
};

export function Header({ homePage }: HeaderProps) {
  return (
    <Flex justifyContent={"space-around"}>
      <Heading>{homePage ? "Frontend Developer" : "Aditya Banerjee"}</Heading>
      <NavBar pages={defaultNavBarProps} />
    </Flex>
  );
}

function Intro() {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      ml={"50px"}
    >
      <Heading>Aditya Banerjee</Heading>
      <Text>This is my personal website.</Text>
    </Flex>
  );
}

function Bio() {
  return (
    <Grid gridTemplateColumns={"1fr 1fr"}>
      <CenteredGridItem>
        <Portrait />
      </CenteredGridItem>
      <CenteredGridItem>
        <Intro />
      </CenteredGridItem>
    </Grid>
  );
}

function Body() {
  return (
    <Template homePage>
      <Bio />
    </Template>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Banerjee</title>
      </Head>
      <main>
        <Body />
      </main>
    </>
  );
}
