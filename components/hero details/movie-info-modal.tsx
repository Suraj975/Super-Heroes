import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
} from "@chakra-ui/react";
import { TabsLabelValues } from "./hero-description";
import { IMovieInfo } from "./types";
import { Loader } from "../loader";

const HeroModalContent = ({
  movieInfo,
  loading,
}: {
  movieInfo: IMovieInfo;
  loading: boolean;
}) => {
  if (loading) return <Loader h="500px" />;
  return (
    <Box>
      <Image
        width="100%"
        src={movieInfo?.image}
        alt="Movie Details"
        objectFit={"contain"}
        height="300px"
      />
      <Text>{movieInfo?.plot}</Text>
      <TabsLabelValues label="Title" value={movieInfo?.fullTitle as string} />
      <TabsLabelValues label="Genres" value={movieInfo?.genres as string} />
      <TabsLabelValues
        label="Imdb Rating"
        value={movieInfo?.imDbRating as string}
      />
      <TabsLabelValues label="Stars" value={movieInfo?.stars as string} />
      {movieInfo?.trailer?.linkEmbed && (
        <Accordion allowToggle>
          <AccordionItem borderBottom="none">
            <AccordionButton px="0">
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                color="gray.300"
                px="1"
                textTransform="uppercase"
              >
                TRAILER
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel px="0" pb={4}>
              <iframe
                width="100%"
                height="315"
                src={movieInfo?.trailer?.linkEmbed}
              ></iframe>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </Box>
  );
};

type MovieInfoModalPropsType = {
  onClose: () => void;
  isOpen: boolean;
  imdbId: string;
};

export function MovieInfoModal({
  onClose,
  isOpen,
  imdbId,
}: MovieInfoModalPropsType) {
  const [movieInfo, setMovieInfo] = useState<IMovieInfo | any>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const getMoviesInfo = async () => {
      setLoading(true);
      const movieInfoResponse = await fetch(
        `https://imdb-api.com/en/API/Title/k_k56ot1w0/${imdbId}/Images,Trailer,Ratings`
      );
      const data = await movieInfoResponse?.json();
      if (data?.errorMessage) {
        toast({
          position: "bottom-right",
          render: () => (
            <Box color="white" p={3} bg="red.500">
              {data?.errorMessage}
            </Box>
          ),
        });
        handleModalClose();
        return;
      }
      setLoading(false);
      setMovieInfo(data);
    };
    getMoviesInfo();
  }, [imdbId]);

  const handleModalClose = () => {
    setMovieInfo({});
    onClose();
  };

  return (
    <Box>
      <Modal size="2xl" isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HeroModalContent loading={loading} movieInfo={movieInfo} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
