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
} from "@chakra-ui/react";
import { TabsLabelValues } from "./hero-description";
import { IMovieInfo } from "./types";

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
  const [movieInfo, setMovieInfo] = useState<IMovieInfo>();
  const getMoviesInfo = async () => {
    const movieInfoResponse = await fetch(
      `https://imdb-api.com/en/API/Title/k_4zl80m9s/${imdbId}/Images,Trailer,Ratings`
    );
    const data = await movieInfoResponse?.json();
    if (data?.errorMessage) {
      // alert(data?.errorMessage);
      onClose();
      return;
    }
    setMovieInfo(data);
  };

  useEffect(() => {
    getMoviesInfo();
  }, []);
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image
                width="100%"
                src={movieInfo?.image}
                alt="Movie Details"
                objectFit={"contain"}
                height="300px"
              />
              <Text>{movieInfo?.plot}</Text>
              <TabsLabelValues
                label="Title"
                value={movieInfo?.fullTitle as string}
              />
              <TabsLabelValues
                label="Genres"
                value={movieInfo?.genres as string}
              />
              <TabsLabelValues
                label="Imdb Rating"
                value={movieInfo?.imDbRating as string}
              />
              <TabsLabelValues
                label="Stars"
                value={movieInfo?.stars as string}
              />
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

                    <AccordionPanel pb={4}>
                      <iframe
                        width="100%"
                        height="315"
                        src={movieInfo?.trailer?.linkEmbed}
                        // frameborder="0"
                        style={{ overflow: "hidden" }}
                        scrolling="no"
                      ></iframe>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
