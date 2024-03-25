// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Text, Button, Stack, Flex } from "@chakra-ui/react";
import { FaRocket, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" color="gray.700">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Chakra Landing
          </Heading>
        </Flex>
        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" mt={{ base: 4, md: 0 }}>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">About</Button>
          <Button colorScheme="blue">Get Started</Button>
        </Stack>
      </Flex>

      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Build landing pages faster
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Chakra UI makes it easy to create beautiful, responsive landing pages
        </Text>
        <Stack spacing={4} direction="row" align="center" justify="center">
          <Button leftIcon={<FaRocket />} colorScheme="blue" variant="solid">
            Get started
          </Button>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="outline">
            Learn more
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
