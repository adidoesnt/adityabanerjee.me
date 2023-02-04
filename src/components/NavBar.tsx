import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export type Page = {
  name: string;
  path: string;
};

export type NavBarProps = {
  pages: Page[];
};

export const defaultNavBarProps = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Resume", path: "resume" },
  { name: "Blog", path: "blog" },
  { name: "Contact", path: "contact" },
  { name: "Acknowledgements", path: "credits"}
];

export default function NavBar({ pages }: NavBarProps) {
  return (
    <Flex
      w={"50%"}
      h={"auto"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {pages.map((page, index) => (
        <Link key={index} href={page.path}>
          {page.name}
        </Link>
      ))}
    </Flex>
  );
}
