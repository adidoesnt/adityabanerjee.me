import {
  Card,
  CardHeader,
  CardBody,
  CardBodyProps,
  Text,
  Grid,
} from "@chakra-ui/react";
import {
  GithubCredits,
  LinkedinCredits,
  FacebookCredits,
  InstagramCredits,
  GmailCredits,
} from "@/assets";
import Template from "./template";

export type AcknowledgementCardProps = CardBodyProps & { title: string };

export function AcknowledgementCard({
  title,
  children,
}: AcknowledgementCardProps) {
  return (
    <Card
      w={"300px"}
      h={"250px"}
      m={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <CardHeader fontSize={"25px"}>{title}</CardHeader>
      <CardBody>{children}</CardBody>
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
        not have worked out how we hoped, but I will always cherish our work together.
      </Text>
    </AcknowledgementCard>
  );
}

function FamilyCredits() {
  return (
    <AcknowledgementCard title={"My Family"}>
      <Text>
        To my parents, brother, family and friends - Thank you for making me who I am.
      </Text>
    </AcknowledgementCard>
  );
}

function FriendCredits() {
  return (
    <AcknowledgementCard title={"Pencil Battery"}>
      <Text>
        To my bandmates at Pencil Battery, thank you for helping me express myself.
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
