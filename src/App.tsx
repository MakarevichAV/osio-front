import { useEffect, useState } from "react";
import { usePlcData } from "./hooks/usePlcData";
import PlcList from "./components/plc/PlcList";
import {Header} from "./components/layout/Header/Header";
import { AirHeaterBlock } from "./components/AirHeaterBlock";
import { ProductBlock } from "./components/ProductBlock";
import { ControlBlock } from "./components/ControlBlock";
import { AccountBlock } from "./components/AccountBlock";
import s from "./App.module.css";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
}

function App() {
    const values = usePlcData();

    const [userType, setUserType] = useState<"operator" | "admin">("operator");
    const [userName, setUserName] = useState("John Smith");

    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/recipes")
            .then(res => res.json())
            .then(data => {
                // console.log("Recipes from backend:", data);
                setRecipes(data);
            })
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

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


    const setNames = recipes?.headers.slice(2) || ["No sets"];

    return (
        <div className={s.App}>
            <Header
                userType={userType}
                userName={userName}
                onLogin={handleLogin}
            />
            <main className={s.container}>
                <div className={s.controlBlock}>
                    <AirHeaterBlock />
                    <ProductBlock sets={setNames} />
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



            <div>
                <h1>Recipe Data</h1>
                {!recipes ? (
                    <p>Loading...</p>
                ) : (
                    <pre>{JSON.stringify(recipes, null, 2)}</pre>
                )}
            </div>


        </div>
    );
}

export default App;