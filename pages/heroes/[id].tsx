import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { HeroCharacter } from "../../components/hero details/hero-description";
import { RandomMovieSuggestion } from "../../components/hero details/random-movie-selector";
import { MoviesList } from "../../components/hero details/movie-list";
import {
  IHeroDetails,
  IMovieList,
  ISearch,
} from "../../components/hero details/types";
import { Loader } from "../../components/loader";

type HeroDetailsPropsType = {
  heroMovies: IMovieList;
  heroDetails: IHeroDetails;
};

function HeroDetails(props: HeroDetailsPropsType) {
  const { heroDetails, heroMovies } = props;
  const [moviesList, setMoviesList] = useState<ISearch[]>([]);
  const { isFallback } = useRouter();

  useEffect(() => {
    if (!heroMovies?.Response) return;
    setMoviesList(heroMovies?.Search);
  }, [heroMovies?.Response]);

  if (isFallback) {
    return <Loader h="90vh" w="100vw" />;
  }
  const moviesListLength = moviesList?.length > 0;

  return (
    <Box>
      <Flex flexDir={["column", "row"]}>
        <HeroCharacter heroDetails={heroDetails} />
        {moviesListLength && <RandomMovieSuggestion moviesList={moviesList} />}
      </Flex>
      <MoviesList
        totalResults={heroMovies?.totalResults ?? 0}
        setMoviesList={setMoviesList}
        moviesList={moviesList}
      />
    </Box>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "70Batman" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  let heroName = context?.params?.id.match(/[a-zA-Z]+/g);
  let id = context?.params?.id.match(/\d+/g);
  const heroeDetailsResponse = await fetch(
    `https://www.superheroapi.com/api.php/102000899413423/${id?.[0]}`
  );
  const heroDetails = await heroeDetailsResponse?.json();
  const relevantMoviesRespose = await fetch(
    `https://www.omdbapi.com/?s=${
      heroName && heroName.join(" ")
    }&apikey=85182628`
  );
  const heroMovies = await relevantMoviesRespose?.json();
  return {
    props: { heroDetails, heroMovies },
  };
}

export default HeroDetails;
