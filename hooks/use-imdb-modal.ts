import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const useImdbModal = () => {
  const [imdbId, setImdbId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (!imdbId) return;
    onOpen();
  }, [imdbId]);
  return { setImdbId, isOpen, onClose, imdbId };
};
