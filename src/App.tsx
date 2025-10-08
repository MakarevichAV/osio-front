import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import {Header} from "./components/layout/Header/Header";
import {ProcessManagement} from "./pages/ProcessManagement";
import {RecipeManagement} from "./pages/RecipeManagement";
import s from "./App.module.css";
import PlcList from "./components/plc/PlcList";
import {usePlcData} from "./hooks/usePlcData";
import {Footer} from "./components/layout/Footer/Footer";

function App() {
    const values = usePlcData();

    const [userType, setUserType] = useState<"Operator" | "Admin">("Operator");
    const [userName, setUserName] = useState("John Smith");

    const handleLogin = () => {
        if (userType === "Operator") {
            setUserType("Admin");
            setUserName("Administrator");
        } else {
            setUserType("Operator");
            setUserName("John Smith");
        }
    };

    return (
        <Router>
            <div className={s.App}>
                <Header
                    userType={userType}
                    userName={userName}
                    onLogin={handleLogin}
                />
                <div className={s.content}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProcessManagement
                                    userType={userType}
                                    userName={userName}
                                    onLogin={handleLogin}
                                />
                            }
                        />
                        <Route path="/recipes" element={<RecipeManagement/>}/>
                    </Routes>
                    <h1>PLC Data (Real-time)</h1>
                    <PlcList values={values.values}/>

                </div>
                <Footer/>
            </div>

        </Router>
    );
}

export default App;
