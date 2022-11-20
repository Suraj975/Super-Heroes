import React, { useState } from "react";
import { Image, Heading, Flex, Button } from "@chakra-ui/react";
import { MovieInfoModal } from "./movie-info-modal";
import { useImdbModal } from "../../hooks/use-imdb-modal";
import { IMovieList, ISearch } from "./types";

export const RandomMovieSuggestion = ({
  moviesList,
}: {
  moviesList: ISearch[];
}) => {
  const [randomMovieIndex, setIndex] = useState(() =>
    Math.floor(Math.random() * moviesList.length + 1)
  );
  const { setImdbId, isOpen, onClose, imdbId } = useImdbModal();
  return (
    <Flex flexDir="column" flex="1" height="100%">
      <Flex
        justifyContent={["center", "space-between"]}
        alignItems="center"
        flexDir="column"
        mx={["0px", "10px"]}
      >
        <Heading
          borderRadius="5px"
          bg="red.500"
          size="lg"
          p="10px"
          textAlign={"center"}
          my={["20px", "5px"]}
          mx="2px"
          width="100%"
        >
          Movie of the day
        </Heading>
        <Flex
          flexDir="column"
          alignItems="center"
          h="450px"
          width="100%"
          cursor="pointer"
          onClick={() => setImdbId(moviesList[randomMovieIndex - 1]?.imdbID)}
        >
          <Image
            src={moviesList[randomMovieIndex - 1]?.Poster}
            height="auto"
            width="100%"
            maxH="450px"
            alt="movie"
            objectFit={["fill", "contain"]}
          />
        </Flex>
        <Button
          onClick={() =>
            setIndex(Math.floor(Math.random() * moviesList.length + 1))
          }
          my="10px"
          width="80%"
          colorScheme="red"
          fontWeight="bold"
          fontSize="20px"
        >
          NEW SUGGESTION
        </Button>
      </Flex>
      {imdbId && (
        <MovieInfoModal onClose={onClose} isOpen={isOpen} imdbId={imdbId} />
      )}
    </Flex>
  );
};
