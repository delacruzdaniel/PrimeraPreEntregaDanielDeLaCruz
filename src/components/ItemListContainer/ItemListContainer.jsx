import { Box, Flex } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex
      width="100vw"  
      height="100vh" 
      align="center" 
      justify="center" 
    >
      <Box
        width="50%" 
        textAlign="center"
        height="auto" 
        p={4} 
        bg="gray.900" 
        color="white"
        borderRadius="md"
        _hover={{ bg: "yellow.500" }} 
        transition="background-color 0.3s ease" 
      >
        {greeting}
      </Box>
    </Flex>
  );
};

export default ItemListContainer;
