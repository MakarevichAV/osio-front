import { AirHeaterBlock } from "../components/AirHeaterBlock";
import { ProductBlock } from "../components/ProductBlock";
import { ControlBlock } from "../components/ControlBlock";
import { AccountBlock } from "../components/AccountBlock";
import s from "../App.module.css";
import { usePlcData } from "../hooks/usePlcData";
import { useEffect, useState } from "react";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
}

interface ProcessManagementProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function ProcessManagement({ userType, userName, onLogin }: ProcessManagementProps) {
    const values = usePlcData();
    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

    const setNames = recipes?.headers.slice(2) || ["No sets"];

    return (
        <main className={s.container}>
            <div className={s.controlBlock}>
                <AirHeaterBlock tempSP={values.tempSP} />
                <ProductBlock sets={setNames} />
                <ControlBlock />
                <AccountBlock
                    userType={userType}
                    userName={userName}
                    onLogin={onLogin}
                />
            </div>
        </main>
    );
}
