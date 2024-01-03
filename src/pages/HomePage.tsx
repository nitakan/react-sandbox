import { Card, HStack, Heading, Icon, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import SideMenuLayout, { menus } from "../layouts/SideMenuLayout";
import { ArrowForwardIcon } from "@chakra-ui/icons";


const HomePage: React.FC = () => {
    const currentPath = window.location.pathname;
    return (
        <div>
            <SideMenuLayout>
                <VStack align='start' spacing={4}>
                    <Heading as='h1' size='lg'>Home</Heading>
                    {menus
                        .filter((menu) => menu.path !== currentPath)
                        .map((menu) =>
                            <Link
                                href={menu.path}
                                _hover={{ bg: 'gray.200' }}
                                width={'100%'}
                            >
                                <Card p={8} _hover={{ bg: 'gray.200' }}>
                                    <HStack>

                                        <VStack spacing={4} align={'start'}>

                                            <Text>
                                                <Heading as='h2' size='md'>
                                                    {menu.name}
                                                </Heading>
                                            </Text>
                                            <Text>
                                                {menu.description}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        <Icon as={ArrowForwardIcon} />
                                    </HStack>
                                </Card>
                            </Link>
                        )}
                </VStack>

            </SideMenuLayout>
        </div>
    );
};

export default HomePage;