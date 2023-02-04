import Head from "next/head";
import { Flex, Grid, Heading, Text, GridItem } from "@chakra-ui/react";
import CenteredGridItem from "@/components/CenteredGridItem";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";
import SocialsBar from "@/components/SocialsBar";
import { Portrait } from "@/assets";

function Header() {
  return (
    <Flex justifyContent={"space-around"}>
      <Heading>Frontend Developer</Heading>
      <NavBar pages={defaultNavBarProps} />
    </Flex>
  );
}

function Intro() {
  return (
    <Flex flexDir={"column"} alignItems={'center'} justifyContent={'center'}>
      <Heading>Aditya Banerjee</Heading>
      <Text>This is my personal website.</Text>
    </Flex>
  );
}

function Bio() {
  return (
    <Grid gridTemplateColumns={"1fr 2fr"}>
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
    <Grid
      gridTemplateRows={"repeat(3, 1fr)"}
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <GridItem w={"100%"} h={"auto"}>
        <Header />
      </GridItem>
      <CenteredGridItem w={"100%"} h={"auto"}>
        <Bio />
      </CenteredGridItem>
      <CenteredGridItem w={"100%"} h={"auto"}>
        <SocialsBar />
      </CenteredGridItem>
    </Grid>
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
