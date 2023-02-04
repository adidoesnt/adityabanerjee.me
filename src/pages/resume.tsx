import { Box } from "@chakra-ui/react";
import NavBar, { defaultNavBarProps } from "@/components/NavBar";

export default function Resume() {
    return <Box>
        <NavBar pages={defaultNavBarProps} />
    </Box>
}