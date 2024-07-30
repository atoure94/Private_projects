import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Input,
    Button,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import PseudoElementStyle, {BackgroundStyle} from "../../components/Background.tsx";
import {Imm} from "../../assets";

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };
    const backgroundStyle = {
        position: 'relative',
        minHeight: '100vh',
    };

    return (
        <div style={BackgroundStyle}>
            <div style={PseudoElementStyle({ url: Imm })}></div>

            <Box
                className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
            >
                <Container maxW="2xl" py={{ base: 24, sm: 48, lg: 56 }} mx="auto">
                    <Box>
                        <Flex direction="column" alignItems="center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="mx-auto h-10 w-auto"
                            />
                            <Heading
                                as="h2"
                                size="2xl"
                                fontWeight="bold"
                                color="gray.900"
                                mt={10}
                                mb={6}
                                textAlign="center"
                            >
                                Sign in to your account
                            </Heading>
                            <Box
                                mt={10}
                                w="full"
                                maxW="sm"
                                borderWidth="1px"
                                borderRadius="md"
                                p={6}
                                boxShadow="md"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <Box>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            mt={2}
                                            border="0"
                                            py={1.5}
                                            color="gray.900"
                                            focusBorderColor="indigo.600"
                                            placeholder="Enter your email address"
                                        />
                                    </Box>

                                    <Box>
                                        <Flex justify="space-between" align="center">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <Link
                                                href="#"
                                                fontSize="sm"
                                                fontWeight="semibold"
                                                color="indigo.600"
                                                _hover={{ color: 'indigo.500' }}
                                            >
                                                Forgot password?
                                            </Link>
                                        </Flex>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            mt={2}
                                            border="0"
                                            py={1.5}
                                            color="gray.900"
                                            focusBorderColor="indigo.600"
                                            placeholder="Enter your password"
                                        />
                                    </Box>

                                    <Button
                                        type="submit"
                                        width="full"
                                        mt={6}
                                        bg="indigo.600"
                                        color="white"
                                        _hover={{ bg: 'indigo.500' }}
                                        _focus={{ boxShadow: 'outline' }}
                                    >
                                        Sign in
                                    </Button>
                                </form>

                                <Text mt={8} textAlign="center" fontSize="sm" color="gray.500">
                                    Not a member?{' '}
                                    <Link
                                        href="#"
                                        fontWeight="semibold"
                                        color="indigo.600"
                                        _hover={{ color: 'indigo.500' }}
                                    >
                                        Start a 14 day free trial
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}
