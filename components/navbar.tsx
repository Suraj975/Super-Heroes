import { Box, Heading, chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <Box width="100%" p="20px" borderBottom="1px solid #363535">
      <Link href="/heroes">
        <Heading>
          <chakra.span color="white">Super</chakra.span>
          <chakra.span color="red.500">Heroes</chakra.span>
        </Heading>
      </Link>
    </Box>
  );
}

export default Navbar;
