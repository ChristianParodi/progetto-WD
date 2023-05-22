import { 
  Container, 
  Heading,
  AbsoluteCenter,
  Image, 
  Button,
  Flex,
  Spacer,
  Box,
  Icon,
  Text,
  Center
} from "@chakra-ui/react"
import { MdSchool } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'
import viteLogo from "/vite.svg"
import React from "react"
import { motion } from 'framer-motion'
function App() {
  return (
    <Container centerContent minH={"100vh"}>
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
          ml={"300px"}
        >
          <Image src={viteLogo} boxSize="200px" />
          <Heading>
            Benvenuto su (titolo)
          </Heading>
          <Heading size={'md'}>
            Blurb Blurb Blurb Blurb Blurb
          </Heading>
          <Flex gap={100}>
            <Button
              w="fit-content"
              h={"fit-content"}
              display={"flex"}
              flexDir={"column"}
              py={5}
              >
              <Icon as={MdSchool} boxSize={"80px"} />
              <Text>
                Studente
              </Text>
            </Button>
            <Button
             w="fit-content"
             h={"fit-content"}
             display={"flex"}
             flexDir={"column"}
             py={5}
             
              >
              <Icon as={FaUserTie} boxSize={"80px"} mb={2}/>
              <Text>
                Recruiter
              </Text>
            </Button>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            >

            </motion.div>
          </Flex>
        </Flex>
    </Container>
  )
}

export default App
