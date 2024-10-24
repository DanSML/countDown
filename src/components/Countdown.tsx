// components/Countdown.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Flex, VStack, HStack } from '@chakra-ui/react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-04-26T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <VStack spacing={6} textAlign="center">
      <HStack spacing={12}>
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </HStack>
    </VStack>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <Flex
    flexDir="column"
    gap={16}
    bg="gray.700"
    borderRadius="md"
    w="80px"
    textAlign="center"
  >
    <Text
      fontSize="42px"
      fontWeight="regular"
    >
      {value}
    </Text>
    <Text
      fontSize="lg"
      color="gray"
    >
      {label}
    </Text>
  </Flex>
);

export default Countdown;
