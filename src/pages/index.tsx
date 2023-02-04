import Head from "next/head";
import { Grid, GridItem } from "@chakra-ui/react";
import { Portrait } from "@/assets/portrait";

function Bio() {
  return <Grid gridTemplateColumns={'1fr 2fr'}>
    <GridItem>
      <Portrait />
    </GridItem>
    <GridItem>
      Hello
    </GridItem>
  </Grid>
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
        Hello
      </GridItem>
      <GridItem w={"100%"} h={"auto"}>
        <Bio />
      </GridItem>
      <GridItem w={"100%"} h={"auto"}>
        Hello
      </GridItem>
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
