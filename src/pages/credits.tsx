import {
  Card,
  CardHeader,
  CardBody,
  CardBodyProps,
  Text,
  Grid,
  Divider,
  Heading,
} from "@chakra-ui/react";
import {
  GithubCredits,
  LinkedinCredits,
  FacebookCredits,
  InstagramCredits,
  GmailCredits,
} from "@/assets";
import Template, { useTheme } from "./template";

export type AcknowledgementCardProps = CardBodyProps & { title: string };

export function AcknowledgementCard({
  title,
  children,
}: AcknowledgementCardProps) {
  const { currentTheme } = useTheme();
  const bgColor = currentTheme ? "brand.700" : "brand.100";
  const textColor = currentTheme ? "brand.300" : "brand.700";

  return (
    <Card
      w={"300px"}
      h={"250px"}
      m={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      bgColor={bgColor}
      textColor={textColor}
    >
      <CardHeader fontSize={"25px"}>
        <Heading>{title}</Heading>
      </CardHeader>
      <Divider />
      <CardBody
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {children}
      </CardBody>
    </Card>
  );
}

function StriveCredits() {
  return (
    <AcknowledgementCard title={"Strive"}>
      <Text>
        To my family at Strive, thank you for giving me my first opportunity.
      </Text>
    </AcknowledgementCard>
  );
}

function ByondCredits() {
  return (
    <AcknowledgementCard title={"ByondXR"}>
      <Text>
        To my ByondXR family, thank you for teaching me almost everything I
        know.
      </Text>
    </AcknowledgementCard>
  );
}

function OurfinalsCredits() {
  return (
    <AcknowledgementCard title={"OURFinals"}>
      <Text>
        To my team at OURFinals, thank you for having faith in our idea - it may
        not have worked out how we hoped, but I will always cherish our work
        together.
      </Text>
    </AcknowledgementCard>
  );
}

function FamilyCredits() {
  return (
    <AcknowledgementCard title={"My Family"}>
      <Text>
        To my parents, brother, family and friends - Thank you for making me who
        I am.
      </Text>
    </AcknowledgementCard>
  );
}

function FriendCredits() {
  return (
    <AcknowledgementCard title={"Pencil Battery"}>
      <Text>
        To my bandmates at Pencil Battery, thank you for helping me express
        myself.
      </Text>
    </AcknowledgementCard>
  );
}

function IconCredits() {
  return (
    <AcknowledgementCard title={"Icons"}>
      <GithubCredits fontSize={"15px"} />
      <LinkedinCredits fontSize={"15px"} />
      <FacebookCredits fontSize={"15px"} />
      <InstagramCredits fontSize={"15px"} />
      <GmailCredits fontSize={"15px"} />
    </AcknowledgementCard>
  );
}

export default function Credits() {
  return (
    <Template>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        overflow={"scroll"}
      >
        <StriveCredits />
        <ByondCredits />
        <OurfinalsCredits />
        <FamilyCredits />
        <FriendCredits />
        <IconCredits />
      </Grid>
    </Template>
  );
}
