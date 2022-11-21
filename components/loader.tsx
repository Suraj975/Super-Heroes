import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export const Loader = ({ ...rest }) => {
  return (
    <Flex justifyContent="center" alignItems="center" {...rest}>
      <Spinner size="xl" color="red.500" />
    </Flex>
  );
};
