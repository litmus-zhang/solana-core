import React, { FC, MouseEventHandler, useCallback } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Disconnected: FC = () => {
  const modalState = useWalletModal();
  const { wallet, connect } = useWallet();
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      if (e.defaultPrevented) {
        return;
      }
      if (!wallet) {
        modalState.setVisible(true);
      } else {
        connect().catch(() => {});
      }
    },
    [wallet, connect, modalState]
  );
  return (
    <Container>
      <VStack spacing={20}>
        <Heading
          color="white"
          as="h1"
          size="3xl"
          noOfLines={2}
          textAlign="center"
        >
          Mint buildoor. Earn $BLD. Level Up.
        </Heading>
        <Button
          bgColor="accent"
          color="white"
          maxW="380px"
          onClick={handleClick}
        >
          Become a buildoor
          <ArrowForwardIcon ml={2} />
        </Button>
      </VStack>
    </Container>
  );
};

export default Disconnected;
