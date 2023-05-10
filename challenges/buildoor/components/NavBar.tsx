import dynamic from "next/dynamic";
import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import { HStack, Spacer, Center, Box, Stack } from "@chakra-ui/react";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
const NavBar: FC = () => {
  return (
    <HStack>
      <Spacer />
      <WalletMultiButtonDynamic
        className={styles["wallet-adapter-button-trigger"]}
      />
    </HStack>
  );
};

export default NavBar;
