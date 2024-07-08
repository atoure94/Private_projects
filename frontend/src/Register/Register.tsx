import {useState} from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    Text, useToast
} from "@chakra-ui/react";
import {EmailIcon, LockIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register =()=>{
    const navigate = useNavigate();
    const toast = useToast();
    const [showPassword, setShowPassword]=useState(false);
    const [registerData, setRegisterData] = useState({
        name: "",
        firstname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/add', registerData);
            console.log(response.data); // Assuming the API returns some data upon successful registration
            toast({
                title: 'Registration successful.',
                description: 'Redirection to the Login page.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });

            navigate(-1);
            setRegisterData({
                name: "",
                firstname: "",
                email: "",
                password: "",});

        } catch (error) {
            console.error('Registration failed:', error);
            toast({
                title: 'Registration failed.',
                description: 'Please try again later.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    }

    return(
        <Center width="100%" minHeight="100vh" flexDirection={{ base: "column", md: "row" }}>
            <Center w={'50%'} >
                <Box flex={'1'} p={'10'}>
                    <Center>
                        <Text
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="bold"
                            color="blue.500"
                            textAlign="center"
                        >
                            Registration
                        </Text>
                    </Center>
                    <form onSubmit={handleSubmit}>
                        <Flex mt={{ base: "6", md: "30" }}
                              border="1px"
                              borderColor="blue.500"
                              borderRadius={7}
                              alignItems="center"
                              justifyContent="center"
                              flexDirection="column"
                              height={{ base: "auto", md: "500px" }}>
                            <Stack spacing={8} minWidth={{ base: "auto", md: "500px" }}>
                                <InputGroup>
                                    <Input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        color={"black"}
                                        onChange={handleChange}
                                        value={registerData.name}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Input
                                        required
                                        type="text"
                                        name="firstname"
                                        placeholder="firstname"
                                        color={"black"}
                                        onChange={handleChange}
                                        value={registerData.firstname}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <EmailIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        required
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        color={"black"}
                                        onChange={handleChange}
                                        value={registerData.email}
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
                                        name="password"
                                        placeholder="Enter password"
                                        color={"black"}
                                        onChange={handleChange}
                                        value={registerData.password}
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
                                    onClick={handleSubmit}
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
                                    You have an account? <u><Link to={"/"}> Sign In</Link></u>
                                </Text>
                            </Center>


                        </Flex>
                    </form>



                </Box >
            </Center>
        </Center>
    );
}

export default Register