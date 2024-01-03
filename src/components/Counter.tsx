import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import useCounter from "../hooks/useCounter";

export const Counter = () => {
    const { state: count, reset, increment, setValue } = useCounter();
    return (
        <VStack spacing={8}>
            <Box px={16} py={8} bg='gray.200' rounded='md'>
                <Text fontSize={24}>Count: {count}</Text>
            </Box>
            <HStack spacing={4}>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={() => setValue(count + 10)}>Set 100</Button>
                <Button onClick={reset}>Reset</Button>
            </HStack>
        </VStack>
    );
}
