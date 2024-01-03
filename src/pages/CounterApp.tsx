import SideMenuLayout from "../layouts/SideMenuLayout";

const CounterApp: React.FC = () => (
    <SideMenuLayout>

        <div>
            <h2>Counter</h2>
            <div>
                <p>Count: 0</p>
            </div>
        </div>
    </SideMenuLayout>
);

export default CounterApp;