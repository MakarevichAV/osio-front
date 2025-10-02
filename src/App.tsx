import {useState} from "react";
import { usePlcData } from "./hooks/usePlcData";
import PlcList from "./components/plc/PlcList";
import {Header} from "./components/layout/Header";
import { AirHeaterBlock } from "./components/AirHeaterBlock";
import { ProductBlock } from "./components/ProductBlock";
import { ControlBlock } from "./components/ControlBlock";
import { AccountBlock } from "./components/AccountBlock";

function App() {
    const values = usePlcData();

    const [userType, setUserType] = useState<"operator" | "admin">("operator");
    const [userName, setUserName] = useState("John Smith");

    const handleLogin = () => {
        // Toggle between operator and admin for demo purposes
        if (userType === "operator") {
            setUserType("admin");
            setUserName("Administrator");
        } else {
            setUserType("operator");
            setUserName("John Smith");
        }
    };

    return (
        <div className="App">
            <Header
                userType={userType}
                userName={userName}
                onLogin={handleLogin}
            />
            <main className="container">
                <div className="control-block">
                    <AirHeaterBlock />
                    <ProductBlock />
                    <ControlBlock />
                    <AccountBlock
                        userType={userType}
                        userName={userName}
                        onLogin={handleLogin}
                    />
                </div>
            </main>
            <h1>PLC Data (Real-time)</h1>
            <PlcList values={values} />
        </div>
    );
}

export default App;