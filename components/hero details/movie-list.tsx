import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { useHandlePagination } from "../../hooks/use-pagination";
import { MovieInfoModal } from "./movie-info-modal";
import { useImdbModal } from "../../hooks/use-imdb-modal";
import { MovieListProps } from "./types";
import { useRouter } from "next/router";

export const MoviesList = ({
  moviesList,
  setMoviesList,
  totalResults,
}: MovieListProps) => {
  const [page, setPage] = useState(1);
  const { setImdbId, isOpen, onClose, imdbId } = useImdbModal();
  const { query } = useRouter();
  let heroName = (query?.id as string)?.match(/[a-zA-Z]+/g);
  const { lastElementRef } = useHandlePagination(
    moviesList,
    page,
    setPage,
    totalResults
  );
  const getMovies = async () => {
    try {
      const relevantMoviesRespose = await fetch(
        `https://www.omdbapi.com/?s=${
          heroName && heroName.join(" ")
        }&apikey=7bf21933&page=${page}`
      );
      const heroMovies = await relevantMoviesRespose?.json();
      setMoviesList([...moviesList, ...heroMovies?.Search]);
    } catch (error) {
      console.log("api error", error);
    }
  };
  useEffect(() => {
    if (page === 1) return;
    getMovies();
  }, [page]);

  if (!moviesList?.length)
    return (
      <Heading
        pt="10px"
        borderTop="1px solid #010000"
        mt="40px"
        borderRadius="2px"
        textAlign="center"
      >
        No Featured movies!
      </Heading>
    );

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt="20px"
      width="100%"
    >
      <Heading
        size="lg"
        borderBottom="1px solid"
        borderBottomColor="red.500"
        bg="red.500"
        px="20px"
        py="10px"
        width="98%"
        borderRadius="5px"
      >
        Relevant Movies
      </Heading>
      <Flex
        w="100%"
        justifyContent="center"
        mt="20px"
        flexWrap="wrap"
        flexDir={["column", "row"]}
      >
        {moviesList?.map((movie) => {
          if (!movie?.Poster) return null;
          return (
            <Box
              cursor="pointer"
              onClick={() => setImdbId(movie?.imdbID)}
              mx={["5px", "10px"]}
              my="10px"
              w="400px"
              maxW={["100%", "400px"]}
              key={movie?.imdbID}
              ref={lastElementRef}
            >
              <Image
                src={movie?.Poster}
                height={["100%", "400px"]}
                width={["100%", "400px"]}
                alt="movie"
              />
              <Box
                bg="red.500"
                borderBottomRadius="10px"
                textTransform="uppercase"
                fontWeight="bold"
                p="10px"
              >
                <Text maxW={["100%", "300px"]} noOfLines={1}>
                  {movie?.Title}
                </Text>
                <Text>{movie?.Year}</Text>
              </Box>
            </Box>
          );
        })}
      </Flex>
      {imdbId && (
        <MovieInfoModal onClose={onClose} isOpen={isOpen} imdbId={imdbId} />
      )}
    </Flex>
  );
};
