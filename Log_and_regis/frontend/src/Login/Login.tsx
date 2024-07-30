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
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = ({isLoggedIn, onLogin}) =>{
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async ()=>{
        const loginData ={
            email: email,
            password: password
        };

        try{
            console.log("avant res");
            const response= await axios.post("http://localhost:3000/login", loginData);
            console.log("Login Successful: ", response.data);

            onLogin();

            navigate('/home');
            toast({
                title: 'Login successful.',
                description: "Redirection to the home page.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });

        }catch(error){
            console.error('Login failed', error);
            toast({
                title: 'Login Failed.',
                description: "Check information.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }

    }


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
                    <form onSubmit={handleLogin}>   <Flex mt={{ base: "6", md: "30" }}
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
                                onClick={handleLogin}

                            >
                                Submit
                            </Button>
                        </Stack>
                        <Center>
                            <Text
                                p={4}
                                fontSize={{ base: "lg", md: "2lg" }}
                                fontWeight="bold"
                                color="blue.500"
                                textAlign="center"
                            >
                                Don't you have an account? <u><Link to={"/register"}> Sign Up</Link></u>
                            </Text>
                        </Center>

                    </Flex></form>



                </Box >
            </Center>

        </Flex>
    );
}


export default Login