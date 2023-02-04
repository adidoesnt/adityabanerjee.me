import { Box } from "@chakra-ui/react";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";

export default function About() {
    return <Box>
        <NavBar pages={defaultNavBarProps} />
    </Box>
}