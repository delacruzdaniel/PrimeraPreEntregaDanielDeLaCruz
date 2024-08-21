import { Flex, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";



const CartWidget = () => {
    return(
    <Flex>
        <CiShoppingCart size={"50"} />
        <Text fontSize={"20px"}>0</Text>
    </Flex>

    )

}


export default CartWidget; 