import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Heading,
  Button,
  Center,
  ButtonProps,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import Template from "./template";
import { useTheme } from "./template";

function CenteredButton({
  children,
  w,
  mt,
  colorScheme,
  onClick,
}: ButtonProps) {
  return (
    <Center>
      <Button w={w} mt={mt} colorScheme={colorScheme} onClick={onClick}>
        {children}
      </Button>
    </Center>
  );
}

export function AboutCard() {
  const { currentTheme } = useTheme();
  const bgColor = currentTheme ? "brand.700" : "brand.100";
  const textColor = currentTheme ? "brand.300" : "brand.700";
  const [more, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!more);
    console.log(more);
  };

  return (
    <Card
      w={"75%"}
      textAlign={"center"}
      bgColor={bgColor}
      textColor={textColor}
    >
      <CardHeader fontSize={"50px"}>
        <Heading>About me</Heading>
      </CardHeader>
      <Divider />
      <CardBody
        fontSize={"20px"}
        w={"90%"}
        display={"flex"}
        flexDir={"column"}
        justifySelf={"center"}
        alignSelf={"center"}
        textAlign={"left"}
      >
        <Text mt={"10px"}>
          Hi! My name is Aditya Banerjee, and I&apos;m a software developer and
          a 4th year student at the National University of Singapore. I
          specialise primarily in frontend development, however I have
          experience with backend development and devops as well. When I&apos;m
          not coding or studying, I like to go for long runs and play music with
          my band, Pencil Battery. I&apos;ve played the drums since I was 3,
          although I primarily sing and play the guitar now.
        </Text>
        <Text mt={"10px"}>
          I started my coding journey in high school, having taking Computer
          Science as one of higher level subjects in IB. I grew fond of the
          subject very fast, and eventually decided that it was the way forward
          for me. During my time in National Service, I had a one year hiatus
          from coding which set me back a little bit. However, upon entering
          university, I decided it was time to sharpen my skills once again. The
          process wasn&apos;t quick, but my internships were definitely a
          catalyst when it came to getting me back on track.
        </Text>
        <Text mt={"10px"}>
          My first internship was at Strive Education, where I worked primarily
          as a backend developer. I was responsible for integrating and
          automating a large number of business processes and systems, including
          but not limited to payment automation, analytics, and quality control.
          As someone with very little experience at the time, it was an
          incredible experience for me. I was able to sharpen my skills with
          many tools and frameworks such as JavaScript, Google Apps Script,
          Python and REST APIs.
        </Text>
        <Text mt={"10px"}>
          After my internship at Strive Education, I continued my work with them
          as coding tutor for middle and high school students. Alongside this, I
          strived to improve myself as a developer, picking up new skills such
          as SQL, ReactJS and React Native. I also applied for the National
          University of Singapore&apos;s flagship entrepreneurship program, NUS
          Overseas Colleges.
        </Text>
        <Text mt={"10px"}>
          NUS Overseas Colleges, or NOC allows students to work at a startup
          abroad, while also pursruing entrepreneurship classes at a partner
          university in the same location. I applied for the NOC program with
          Israel as my number one choice, having read extensively about the
          birth and journey of the &quot;startup nation&quot;. I was thrilled to
          secure my spot in the program, however I still had to secure an
          internship at a startup based in Israel.
        </Text>
        {!more ? (
          <CenteredButton
            colorScheme={"brand"}
            w={"200px"}
            mt={"10px"}
            onClick={toggleMore}
          >
            View more...
          </CenteredButton>
        ) : null}
        {more ? (
          <Box>
            <Text mt={"10px"}>
              There were two startups that I was interested in working at in
              Israel: Cobwebs Technologies and ByondXR. I was interested in
              Cobwebs Technologies due to my interest in Open-source
              Intelligence and Cybersecurity. However, given that our NOC
              program was set to be remote, the opportunity did not materialise.
              I was interested in ByondXR due to the interesting nature of their
              work, however given my lack of exposure to mixed reality
              technologies, I was unsure if I would be able to secure an
              internship there.
            </Text>
            <Text mt={"10px"}>
              After two rounds of interviews, it seemed my lack of project
              experience with a number of important technologies was going to
              cost me my opportunity at ByondXR. At this point, I took it upon
              myself to implement a self-initiated project called
              &quot;Classmate&quot;. The project was a React application to
              display NUS modules, and allow students to plan their semester by
              selecting the modules they wanted to enroll in. The project was
              not officially affiliated with NUS in any way, and though it was
              not a very complex project by any means, it demonstrated moderate
              proficiency, and more importantly, a willingness to learn new
              things. This in turn allowed me to secure an internship with
              ByondXR.
            </Text>
            <Text mt={"10px"}>
              ByondXR used mixed reality technology to create immersive
              e-commerce experience for customers of many large brands. My job
              involved the creation of plugins that added the interactive layer
              to 3D environments that serve as the base for the e-commerce
              experiences or supported other plugins in doing so. My time at
              ByondXR was extremely transformative for me, and played a large
              role in making me the developer I am today. I exposed to a large
              number of tools and frameworks such as TypeScript, React, Jest,
              NX, MongoDB, GraphQL and Docker. More importantly, I received
              invaluable mentorship and training from my senior developers.
            </Text>
            <Text mt={"10px"}>
              Outside of my internships, I also established and worked on a
              startup called OURFinals with 3 of my university batchmates. The
              idea behind OURFinals was to provide ad-hoc on-demand peer
              tutoring for university students. We pursued this idea for a
              while, creating a Telegram bot to link tutors and students as a
              moderately successful MVP. However, as our clientele was
              university students, it was difficult to find a pricing balance
              that satisfied both tutors and students, beause as we know all too
              well, university students are extremely short on two very
              important things: money and time. As a result, my co-founder and I
              are currently trying to pivot.
            </Text>
            <Text mt={"10px"} mb={"10px"}>
              I&apos;m often described as a very outgoing and approachable
              friend and colleague. I pride myself on my ability to adapt to and
              communicate in different environments. I&apos;m always willing to
              try and learn new things. I&apos;d like to conclude by thanking
              you for taking the time to read this, and I hope to connect with
              you soon!
            </Text>
            {more ? (
              <CenteredButton
                colorScheme={"brand"}
                w={"200px"}
                mt={"10px"}
                onClick={toggleMore}
              >
                View less...
              </CenteredButton>
            ) : null}
          </Box>
        ) : null}
      </CardBody>
    </Card>
  );
}

export default function About() {
  return (
    <Template>
      <AboutCard />
    </Template>
  );
}
