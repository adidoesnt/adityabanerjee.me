import { GridItem, Center, GridItemProps } from "@chakra-ui/react";

export default function CenteredGridItem({ w, h, children }: GridItemProps) {
  return (
    <GridItem w={w} h={h}>
      <Center>{children}</Center>
    </GridItem>
  );
}
