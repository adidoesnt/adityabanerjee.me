import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import {
  Facebook,
  Github,
  Linkedin,
  Instagram,
  Gmail
} from "@/assets";

export default function SocialsBar() {
  return (
    <Flex
      w={"100%"}
      h={"auto"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Flex w={"75%"} h={"auto"} justifyContent={'space-around'}>
        <Link href={"https://github.com/adidoesnt"}>
          <Github />
        </Link>
        <Link href={"https://www.linkedin.com/in/aditya-banerjee-6065281b1/"}>
          <Linkedin />
        </Link>
        <Link href={"https://www.facebook.com/aditya.banerjee3/"}>
          <Facebook />
        </Link>
        <Link href={"https://www.instagram.com/adidoesnt/"}>
          <Instagram />
        </Link>
        <Link href={"contact"}>
          <Gmail />
        </Link>
      </Flex>
    </Flex>
  );
}
