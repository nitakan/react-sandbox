import { Box, HStack, Link, LinkProps, Stack, Text } from "@chakra-ui/react";
import React from "react";

type MenuData = {
    name: string;
    path: string;
    description?: string;
};

export const menus: Array<MenuData> = [
    {
        name: "Home",
        path: "/",
        description: "ホーム",
    },
    {
        name: "Counter",
        path: "/counter",
        description: "Stateを試してみる用",
    },
];

const HoverLink = (props: LinkProps) => {
    const currentPath = window.location.pathname;
    const isActive = props.href === currentPath;
    if (isActive) {
        return (
            <Box p={2} {...props}>
                <Text fontWeight='bold'>
                    {props.children}
                </Text>
            </Box>
        );
    }
    return <Link
        rounded='base'
        _hover={{ bg: 'gray.200' }}
        p={2}
        w={'100%'}
        {...props}
    />;
}
const Navigation = () => {
    return (
        <Stack as='nav'>
            {menus.map((menu) =>
                <HoverLink href={menu.path}>
                    {menu.name}
                </HoverLink>
            )};
        </Stack>
    );
};

type SideMenuLayoutProps = {
    children: React.ReactNode;
};
const SideMenuLayout = ({ children }: SideMenuLayoutProps) => {
    return (

        <HStack alignItems={'start'} width={'100%'}>
            <Box display={{ base: "block", md: "block" }} p={6}>
                <Navigation />
            </Box>
            <Box flex={1} p={6}>
                {children}
            </Box>
        </HStack>


    );
};

export default SideMenuLayout;