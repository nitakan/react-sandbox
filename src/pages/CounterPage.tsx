import { Heading } from "@chakra-ui/react";
import { Counter } from "../components/Counter";
import SideMenuLayout from "../layouts/SideMenuLayout";

const CounterPage: React.FC = () => (
    <SideMenuLayout>

        <div>
            <Heading as='h1' size='lg'>Counter</Heading>
            <div>
                <Counter />
            </div>
        </div>
    </SideMenuLayout>
);

export default CounterPage;