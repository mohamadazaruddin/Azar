import { Avatar, Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="full" w="full" align="center" justify="center">
      <Box
        w="60%"
        textAlign="center"
        fontSize="40px"
        fontWeight="bold"
        bgGradient="linear(to-r, #ff0000, #0000ff)"
        bgClip="text"
        color="transparent"
      >
        <Box mb="10">
          <Avatar
            h={200}
            w={200}
            src="https://i.pinimg.com/564x/1a/61/68/1a6168ed19756dbb1a815ea085bfbc65.jpg"
          />
        </Box>
        Welcome to my portfolio! As a UX designer and full stack developer, I am
        passionate about creating seamless and user-friendly digital
        experiences. This website is currently under development, but stay tuned
        for updates on my latest projects and designs. Thank you for visiting!
      </Box>
    </Flex>
  );
}
