import React, { useState } from "react";
import Head from "next/head";
import SuperHeroList from "../../components/home/superhero-list";
import { charactersList } from "../../helpers/constant";
import HeroSearch from "../../components/home/hero-search";
import { Flex } from "@chakra-ui/react";
import { CharactersListType } from "../../components/hero details/types";

export default function Heroes() {
  const [herolist, setHeroList] =
    useState<CharactersListType[]>(charactersList);
  return (
    <Flex flexDir={"column"}>
      <Head>
        <title>Super Heroes</title>
        <meta name="description" content="Super heroes comics and movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSearch setHeroList={setHeroList} />
      <SuperHeroList herolist={herolist} />
    </Flex>
  );
}
