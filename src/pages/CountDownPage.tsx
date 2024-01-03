import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import SideMenuLayout from "../layouts/SideMenuLayout";
import { CountDown } from "../components/CountDown";
import { useCallback } from "react";

const CountDownPage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onReset = useCallback(() => {
        console.log('reset');
    }, []);
    const onCompleted = useCallback(() => {
        console.log('completed');
        onOpen();
    }, [onOpen]);
    const onTick = useCallback((current: number) => {
        console.log('tick: ' + current);
    }, []);
    return (

        <SideMenuLayout>
            <Box>
                <Heading as='h1' size='lg'>CountDown</Heading>
                <Box>
                    <CountDown
                        initial={10}
                        onReset={onReset}
                        onCompleted={onCompleted}
                        onTick={onTick}
                        repeat={true} />
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                    <Box p={8} rounded='md'>
                        <Heading as='h2' size='lg'>Complete</Heading>
                    </Box>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </SideMenuLayout>
    );
};

export default CountDownPage;