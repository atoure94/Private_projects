
import { Box, Container, Heading, Text, Flex, Button, useDisclosure, Collapse } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Acheter from "../pages/Acheter/Acheter.tsx";

function Hero() {
    const { isOpen, onToggle } = useDisclosure();
    const Toggle = ()=>{
        <Collapse in={isOpen} animateOpacity>
            <Box p='40px' color='white'  rounded='md' shadow='md' width={"auto"} height={"auto"}>
                <Acheter />
            </Box>
        </Collapse>
    }

    return (
        <Box>
            <Container maxW="2xl" py={{ base: 24, sm: 48, lg: 56 }} mx="auto">
                <Box>
                    <Heading as="h1" size="4xl" fontWeight="bold" color="black" mb={6}>
                        Habitat.ml
                    </Heading>
                    <Text mt={6} fontSize="4xl" color="black">
                        Find your dream place
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="white" mt={4}>
                        We are glad to have you around. <br />
                        Feel free to browse our website.
                    </Text>
                    <Flex mt={10} gap={6}>
                        {/*<Button onClick={onToggle} size="lg" borderRadius="50px" w="142px" h="50px">Acheter</Button>
                        <Collapse in={isOpen} animateOpacity>
                            <Box p='40px' color='white'  rounded='md' shadow='md' width={"auto"} height={"auto"}>
                                <Acheter />
                            </Box>
                        </Collapse>*/}
    <Link to={'/acheter'}>
        <Button size="lg" borderRadius="50px" w="142px" h="50px">Acheter</Button>
    </Link>

                        <Link to="/louer">
                            <Button colorScheme="blue" size="lg" borderRadius="50px" w="142px" h="50px">Louer</Button>
                        </Link>
                        <Link to="/consulter">
                            <Button size="lg" borderRadius="50px" w="142px" h="50px">Consulter</Button>
                        </Link>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;
