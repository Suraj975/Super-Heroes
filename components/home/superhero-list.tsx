import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blurImageurl } from "../../helpers/constant";
import { CharactersListType } from "../hero details/types";

function SuperHeroList(props: { herolist: CharactersListType[] }) {
  const { herolist } = props;
  if (!herolist?.length)
    return (
      <Flex justifyContent="center">
        <Heading color="red.500" size="lg">
          Hero does not exist in this cosmic universe!!
        </Heading>
      </Flex>
    );
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir={["column", "row"]}
      flexWrap="wrap"
      cursor="pointer"
    >
      {herolist?.map((hero) => {
        return (
          <Link
            href={`/heroes/${hero?.id}${hero?.name.replace(" ", "-")}`}
            key={hero?.id}
          >
            <Box width={["350px", "300px"]} my="10px" mx={[0, "10px"]}>
              <Image
                placeholder="blur"
                blurDataURL={blurImageurl}
                src={hero?.image}
                alt="hero"
                width={350}
                height={240}
              />
              <Text
                bg="red.500"
                borderBottomRadius="10px"
                textTransform="uppercase"
                fontWeight="bold"
                p="10px"
              >
                {hero?.name}
              </Text>
            </Box>
          </Link>
        );
      })}
    </Flex>
  );
}

export default SuperHeroList;
