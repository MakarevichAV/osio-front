import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/layout/Header/Header";
import { ProcessManagement } from "./pages/ProcessManagement";
import { RecipeManagement } from "./pages/RecipeManagement";
import s from "./App.module.css";

function App() {
    const [userType, setUserType] = useState<"operator" | "admin">("operator");
    const [userName, setUserName] = useState("John Smith");

    const handleLogin = () => {
        if (userType === "operator") {
            setUserType("admin");
            setUserName("Administrator");
        } else {
            setUserType("operator");
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
                    <Route path="/recipes" element={<RecipeManagement />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
