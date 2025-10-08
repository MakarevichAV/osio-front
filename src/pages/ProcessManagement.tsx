import {AirHeaterBlock} from "../components/AirHeaterBlock";
import {ProductBlock} from "../components/ProductBlock";
import {ControlBlock} from "../components/ControlBlock";
import {AccountBlock} from "../components/AccountBlock";
import s from "../App.module.css";
import {usePlcData} from "../hooks/usePlcData";
import {useEffect, useState} from "react";
import api from "../services/ApiClient";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
}

interface ProcessManagementProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function ProcessManagement({userType, userName, onLogin}: ProcessManagementProps) {
    const values = usePlcData();
    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const result = await api.getRecipes();
            if (result.success) {
                setRecipes(result.data);
            } else {
                console.error("Error fetching recipes:", result.error);
            }
        };

        fetchRecipes();
    }, []);

    const setNames = recipes?.headers.slice(2) || ["No sets"];

    return (
        <main className={s.container}>
            <div className={s.controlBlock}>
                <AirHeaterBlock tempSP={values.tempSP}/>
                <ProductBlock sets={setNames}/>
                <ControlBlock status={values.values[0]} />
                <AccountBlock
                    userType={userType}
                    userName={userName}
                    onLogin={onLogin}
                />
            </div>
        </main>
    );
}
