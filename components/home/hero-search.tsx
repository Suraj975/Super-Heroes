import { Button, Flex, Input } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { charactersList } from "../../helpers/constant";
import { CharactersListType } from "../hero details/types";

function HeroSearch(props: {
  setHeroList: Dispatch<SetStateAction<CharactersListType[]>>;
}) {
  const { setHeroList } = props;
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) return;
    setHeroList(charactersList);
  }, [query, setHeroList]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      findHero();
    }
  };

  const findHero = () => {
    setHeroList(
      charactersList.filter((hero) =>
        hero?.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  return (
    <Flex
      justifyContent="center"
      width="100%"
      flexDirection={["column", "row"]}
      alignItems="center"
      height="200px"
    >
      <Input
        width={["85%", "80%"]}
        borderRadius="10px"
        h="50px"
        color="white"
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Search your hero"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        borderRadius="10px"
        borderColor="red.500"
        w={["85%", "150px"]}
        color="white"
        h={["40px", "50px"]}
        ml="10px"
        mt={["3", 0]}
        fontSize="20px"
        textTransform="uppercase"
        bg="red.500"
        fontWeight="bold"
        onClick={findHero}
        colorScheme="red"
      >
        Search
      </Button>
    </Flex>
  );
}

export default HeroSearch;
