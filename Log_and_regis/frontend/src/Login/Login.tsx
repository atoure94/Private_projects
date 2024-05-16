import  { useState } from "react";
import {
    Box, Button,
    Center,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    Text, useToast
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { LoginImage } from "../assets";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();

    const handleClick = () => {
        setShowPassword(!showPassword);
    };


    return (
        <Flex width="100%" minHeight="100vh" flexDirection={{ base: "column", md: "row" }}>
            <Center flex="1">
                <Image src={LoginImage} alt="login'image" />
            </Center>
            <Center w={'50%'} >
                <Box flex={'1'} p={'10'}>
                    <Center>
                        <Text
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="bold"
                            color="blue.500"
                            textAlign="center"
                        >
                            Welcome to the login Screen
                        </Text>
                    </Center>
                    <Flex mt={{ base: "6", md: "30" }}
                          border="1px"
                          borderColor="blue.500"
                          borderRadius={7}
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                          height={{ base: "auto", md: "400px" }}>
                        <Box>
                            <Text p={10} fontSize="xl" fontWeight="bold" color="blue.500">
                                Login
                            </Text>
                        </Box>
                        <Stack spacing={8} minWidth={{ base: "auto", md: "500px" }}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <EmailIcon color="gray.300" />
                                </InputLeftElement>
                                <Input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    color={"black"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </InputGroup>

                            <InputGroup size="md">
                                <InputLeftElement pointerEvents="none">
                                    <LockIcon color="gray.300" />
                                </InputLeftElement>
                                <Input
                                    required
                                    pr="4.5rem"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    color={"black"}
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="md" onClick={handleClick}>
                                        {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <Button
                                _hover={{ bg: "blue.200" }}
                                color="white"
                                bg="blue.500"
                                px={10}
                                size={"lg"}
                                isLoading={false}
                                loadingText="Submitting"
                                onClick={() =>
                                    toast({
                                        title: 'Login successful.',
                                        description: "Redirection to the home page.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })}
                            >
                                Submit
                            </Button>
                        </Stack>

                    </Flex>

                </Box >
            </Center>

        </Flex>
    );
}
