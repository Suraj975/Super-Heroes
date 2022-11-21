import React, { ReactElement } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Appearance, Biography, IHeroDetails, Powerstats } from "./types";

type TabsLabelValuesProps = {
  value: string | string[];
  label: string | ReactElement;
};

export const TabsLabelValues = ({ value, label }: TabsLabelValuesProps) => {
  return (
    <Flex
      py="20px"
      width="100%"
      justifyContent="space-between"
      boxShadow=" 0 4px 2px -2px #010000"
    >
      <Box fontWeight="bold" color="gray.300" px="1" textTransform="uppercase">
        {label}
      </Box>
      <Text textAlign="right" fontWeight="bold" color="yellow.300">
        {value}
      </Text>
    </Flex>
  );
};

const ImageLabel = ({ title }: { title: string }) => {
  return (
    <Flex>
      <Image src="../shield.png" width="24px" height="24px" alt="label icon" />
      <Text mx="2" color="white">
        {title}
      </Text>
    </Flex>
  );
};

type contentType = Powerstats | Appearance | Biography | undefined;

const HeroStatsTab = ({ content }: { content: contentType }) => {
  if (!content) return null;
  const contentKeys = Object.keys(content);
  return (
    <Box>
      {contentKeys?.map((title, index) => {
        if (typeof content[title as keyof contentType] !== "string")
          return null;
        if (content)
          return (
            <TabsLabelValues
              key={index}
              value={content[title as keyof contentType]}
              label={<ImageLabel title={title} />}
            />
          );
      })}
    </Box>
  );
};

type HeroCharacterProps = {
  heroDetails: IHeroDetails;
};

export const HeroCharacter = (props: HeroCharacterProps) => {
  const { heroDetails } = props;
  return (
    <Flex
      flex="2"
      mt="5px"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
    >
      <Flex
        width="100%"
        maxWidth="1600px"
        minHeight={"auto"}
        flexDir={["column", "row"]}
      >
        <Flex justifyContent="center">
          <Image
            src={heroDetails?.image?.url}
            alt="hero"
            width={["100%", "500px"]}
            height={"100%"}
          />
        </Flex>
        <Box minH="524px" w="100%" mx={[0, "10px"]}>
          <Heading
            mb="10px"
            mt={["10px", 0]}
            bg="red.500"
            p="10px"
            size="lg"
            textTransform="uppercase"
            textAlign={["center", "left"]}
            borderRadius="5px"
          >
            {heroDetails?.name}
          </Heading>
          <Tabs mx={[0, "5px"]} colorScheme="red">
            <TabList>
              <Tab>POWERSTATS</Tab>
              <Tab>BIOGRAPHY</Tab>
              <Tab>APPEARANCE</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <HeroStatsTab content={heroDetails?.powerstats} />
              </TabPanel>
              <TabPanel>
                <HeroStatsTab content={heroDetails?.biography} />
              </TabPanel>
              <TabPanel>
                <HeroStatsTab content={heroDetails?.appearance} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  );
};
