import {Button, Center, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <Center gap={4}>
            <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
            >
                Welcome to the HOME page
            </Text>
            <Link to={"/"}>
                <Button
                    _hover={{ bg: "blue.200" }}
                    color="white"
                    bg="blue.500"
                    px={10}
                    size={"lg"}
                    isLoading={false}
                    loadingText="Submitting"

                >
                    click to redirect to home
                </Button>
            </Link>
        </Center>
    );
}

export default Home