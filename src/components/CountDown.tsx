import { Box, Button, HStack, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import useCountDown from "../hooks/useCountDown";
import { useState } from "react";

type CountDownProps = {
    initial: number,
    tickIntervalMillis?: number,
    onReset?: () => void,
    onCompleted?: () => void,
    onTick?: (current: number) => void,
    repeat?: boolean,
}

export const CountDown = (props: CountDownProps) => {
    const [repeat, setRepeat] = useState(false);
    const [count, reset] = useCountDown(
        props.initial,
        props.tickIntervalMillis,
        props.onReset,
        props.onCompleted,
        props.onTick,
        repeat,
    );


    return (
        <VStack spacing={8}>
            <Box px={16} py={8} bg='gray.200' rounded='md'>
                <Text fontSize={24}>{count}</Text>
            </Box>

            <HStack spacing={4}>
                <Button onClick={reset}>Reset</Button>
            </HStack>

            <RadioGroup
                defaultValue={repeat ? 'true' : 'false'}
                onChange={(value) => setRepeat(value === 'true')}
            >
                <HStack spacing={4}>
                    <Radio value="true">リピートする</Radio>
                    <Radio value="false">リピートしない</Radio>
                </HStack>
            </RadioGroup>
        </VStack>
    );
}