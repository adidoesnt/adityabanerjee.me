import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Facebook, Github, Linkedin, Instagram, Gmail } from "@/assets";

export default function SocialsBar() {
  return (
    <Flex
      w={"100%"}
      h={"auto"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Flex w={"75%"} h={"auto"} justifyContent={"space-around"}>
        <Link href={"https://github.com/adidoesnt"} target={"blank"}>
          <Github />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aditya-banerjee-6065281b1/"}
          target={"blank"}
        >
          <Linkedin />
        </Link>
        <Link
          href={"https://www.facebook.com/aditya.banerjee3/"}
          target={"blank"}
        >
          <Facebook />
        </Link>
        <Link href={"https://www.instagram.com/adidoesnt/"} target={"blank"}>
          <Instagram />
        </Link>
        <Link href={"contact"}>
          <Gmail />
        </Link>
      </Flex>
    </Flex>
  );
}
