import { Heading, Flex, Spacer, Box, Icon, Text } from "@chakra-ui/react";

import { MdSchool, MdSupportAgent } from "react-icons/md";

import React from "react";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <Flex
      bgColor={"primary.100"}
      alignItems={"center"}
      flexDir="column"
      minH={"100vh"}
      minW={"100vw"}
    >
      <Heading as="h1" size={"4xl"} mt={10}>
        WorkPholio
      </Heading>
      <Heading as="h2" size={"sm"} color={"gray.500"} mt={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        <br />
        elit. Et ratione eligendi, beatae nam cupiditate error.
      </Heading>
      <Flex alignItems={"center"} gap={"15em"} mt={20}>
        {/* Studente */}
        <Box
          boxShadow={"lg"}
          minW={"300px"}
          minH={"300px"}
          bgColor={"blue.800"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Icon as={MdSchool} boxSize={"80%"} color={"white"} />
          <Spacer />
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"white"}
            w={"100%"}
            h={"3.5em"}
          >
            <CustomButton colorScheme="yellow">Registrati</CustomButton>
          </Flex>
        </Box>
        {/* Recruiter */}
        <Box
          boxShadow={"lg"}
          minW={"300px"}
          minH={"300px"}
          bgColor={"blue.800"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Icon as={MdSupportAgent} boxSize={"80%"} color={"white"} />
          <Spacer />
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"white"}
            w={"100%"}
            h={"3.5em"}
          >
            <CustomButton colorScheme="yellow">Registrati</CustomButton>
          </Flex>
        </Box>
      </Flex>
      <Text mt={20} fontSize={"lg"}>
        Oppure se hai gia' un'account
      </Text>
      <CustomButton mt={5} colorScheme="yellow">
        Accedi
      </CustomButton>
    </Flex>
  );
}

export default App;
