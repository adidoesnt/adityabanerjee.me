import Head from "next/head";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CenteredGridItem from "@/components/CenteredGridItem";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";
import { Portrait } from "@/assets";
import Template, { useTheme } from "./template";
import Link from "next/link";

export type HeaderProps = {
  homePage?: boolean;
  toggleDarkMode: () => void;
};

export function Header({ homePage, toggleDarkMode }: HeaderProps) {
  return (
    <Flex justifyContent={"space-around"}>
      <Link href={"/"}>
        <Heading>{homePage ? "Frontend Developer" : "Aditya Banerjee"}</Heading>
      </Link>
      <NavBar pages={defaultNavBarProps} toggleDarkMode={toggleDarkMode} />
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
      h={"100%"}
    >
      <Heading>Aditya Banerjee</Heading>
      <Text mt={"10px"} textAlign={"center"} fontSize={"20px"}>
        Full-time musician, part-time student <br /> and part-time developer.
      </Text>
      <Text mt={"10px"} textAlign={"center"} fontSize={"20px"}>
        JavaScript is my poison of choice.
      </Text>
    </Flex>
  );
}

function Bio() {
  const { currentTheme } = useTheme();

  return (
    <Grid gridTemplateColumns={"1fr 1fr"}>
      <CenteredGridItem>
        <Portrait darkMode={currentTheme} />
      </CenteredGridItem>
      <CenteredGridItem h={"100%"} display={"flex"}>
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
