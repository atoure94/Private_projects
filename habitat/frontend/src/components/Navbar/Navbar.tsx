import {Box, Button, ButtonGroup, Flex, Heading, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Navbar =()=>{
    return(
        <Flex minWidth='max-content' alignItems='center' gap='2' p={4}>

            <Spacer />
            <Link to={'/login'}>
                <Button variant={"outline"} colorScheme='blue' size={"lg"} borderRadius={"30px"} w={"142px"} h={"50px"}>Log in</Button>

            </Link>


        </Flex>
    );
}

export default Navbar