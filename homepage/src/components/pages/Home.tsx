import {Box, Button, ButtonGroup, Flex, Heading, Input} from "@chakra-ui/react";


function Home(){
    return(
       <Flex minWidth={'max-content'} alignItems={'center'} gap={2} justifyContent={'center'}>

           <Box mr={'auto'} p={5}>
               <Heading>My App</Heading>
           </Box>



           <Input type={'text'} placeholder={'Recherche'} w={'30%'} />


           <Box ml={'auto'} p={5}>
               <ButtonGroup p={5}>
                   <Button colorScheme={'teal'} p={5}>Bonjour</Button>
                   <Button colorScheme={'teal'}>Bonjour</Button>
               </ButtonGroup>
           </Box>

       </Flex>
    );
}

export default Home;