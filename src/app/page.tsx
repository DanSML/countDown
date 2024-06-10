"use client"
import { Box, Center } from '@chakra-ui/react';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <Center height="100vh" bg="gray.900" color="white">
      <Box>
        <Countdown />
      </Box>
    </Center>
  );
}