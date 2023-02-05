import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import CenteredGridItem from "@/components/CenteredGridItem";
import SocialsBar from "@/components/SocialsBar";
import { Header } from ".";
import { createContext, useContext, useState } from "react";
import { useSessionStorage } from "usehooks-ts";

const ThemeContext = createContext<any>(false);

type ThemeContextProps = {
  children: JSX.Element;
};

export function useTheme() {
  return useContext(ThemeContext);
}

export type TemplateProps = GridProps & {
  homePage?: boolean;
  darkMode?: boolean;
};

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [currentTheme, setCurrentTheme] = useSessionStorage('theme', true);
  const toggleDarkMode = () => {
    setCurrentTheme(!currentTheme);
  };
  const context = {
    currentTheme,
    toggleDarkMode,
  };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default function Template({ homePage, children }: TemplateProps) {
  return (
    <ThemeProvider>
      <TemplateContent homePage={homePage}>{children}</TemplateContent>
    </ThemeProvider>
  );
}

export function TemplateContent({ homePage, children }: TemplateProps) {
  const { currentTheme, toggleDarkMode } = useTheme();
  const bgColor = currentTheme ? "brand.900" : "brand.50";
  const textColor = currentTheme ? "brand.50" : "brand.900";

  return (
    <Grid
      gridTemplateRows={"200px 1fr 200px"}
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={bgColor}
      textColor={textColor}
      transitionDuration={"200ms"}
      overflow={"scroll"}
    >
      <GridItem w={"100vw"} h={"auto"}>
        <Header homePage={homePage} toggleDarkMode={toggleDarkMode} currentTheme={currentTheme} />
      </GridItem>
      <CenteredGridItem>{children}</CenteredGridItem>
      <CenteredGridItem>
        <SocialsBar />
      </CenteredGridItem>
    </Grid>
  );
}
