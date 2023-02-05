import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import CenteredGridItem from '@/components/CenteredGridItem';
import SocialsBar from '@/components/SocialsBar';
import { Header } from '.';

export default function Template({ children }: GridProps) {
    return (
        <Grid
          gridTemplateRows={"200px 1fr 200px"}
          w={"100vw"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GridItem w={"100vw"} h={"auto"}>
            <Header />
          </GridItem>
          <CenteredGridItem>
            {children}
          </CenteredGridItem>
          <CenteredGridItem>
            <SocialsBar />
          </CenteredGridItem>
        </Grid>
      );
}