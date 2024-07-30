import React, {useState} from 'react';
import { Box, Button, Flex, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { BackgroundStyle, PseudoElementStyle } from "../../components/Background.tsx";
import "./acheter.css";

const Acheter = () => {
    const [isLoading, setIsLoading]=useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick =()=>{
        setIsLoading(true);
    }

    return (
        <div style={BackgroundStyle}>
            <div style={PseudoElementStyle}></div>
            <Flex
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100%"
                flexDirection="column"
            >
                <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
                    <form onSubmit={handleSubmit}>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th color="white">Type de bien</Th>
                                    <Th color="white">Ville</Th>
                                    <Th color="white">Commune</Th>
                                    <Th color="white">Quartier</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <select
                                            name="selectedChoice"
                                            className="select"
                                            size="md"
                                            borderWidth="1px"
                                            borderRadius="md"
                                            style={{ width: "100%", padding: "8px" }}
                                            required
                                        >
                                            <option value=""></option>
                                            <option value="terrain">Terrain</option>
                                            <option value="Maison">Maison</option>
                                            <option value="Appartement">Appartement</option>
                                            <option value="LocalCommercial">Local Commercial</option>
                                        </select>
                                    </Td>
                                    <Td>
                                        <Input
                                            type="text"
                                            name="ville"
                                            border="1px"
                                            size="md"
                                            required
                                        />
                                    </Td>
                                    <Td>
                                        <Input
                                            type="text"
                                            name="Commune"
                                            border="1px"
                                            size="md"
                                            required
                                        />
                                    </Td>
                                    <Td>
                                        <Input
                                            type="tel"
                                            name="Quartier"
                                            border="1px"
                                            size="md"
                                            required
                                        />
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Button
                            type="submit"
                            mt={4}
                            colorScheme="blue"
                            width="30%"
                            marginLeft="35%"
                            onClick={handleClick}
                            isLoading={isLoading}
                        >
                            Voir
                        </Button>
                    </form>
                </Box>
            </Flex>
        </div>
    );
};

export default Acheter;
