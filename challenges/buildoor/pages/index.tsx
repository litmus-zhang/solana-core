import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Stack, Spacer, Center } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";
import { useWallet } from "@solana/wallet-adapter-react";

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* Navbar */}
          <NavBar />

          <Spacer />
          <Center>
            {/* If connecetd, the sconed view, otherwise the first */}
            {connected ? <Connected /> : <Disconnected />}
          </Center>

          <Box marginBottom={4} color="white">
            <a
              href="https://twitter.com/_dynage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buildt by _Dynage
            </a>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;