import {AirHeaterBlock} from "../components/AirHeaterBlock";
import {ProductBlock} from "../components/ProductBlock";
import {ControlBlock} from "../components/ControlBlock";
import {AccountBlock} from "../components/AccountBlock";
import s from "../App.module.css";
import {usePlcData} from "../hooks/usePlcData";
import {useEffect, useState} from "react";
import api from "../services/ApiClient";
import {useAppContext} from "../context/RecipesContext";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
}

interface ProcessManagementProps {
    userType: "Operator" | "Admin";
    userName: string;
    onLogin: () => void;
}

export function ProcessManagement({userType, userName, onLogin}: ProcessManagementProps) {
    const values = usePlcData();
    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);
    const {setSetName, setSelectedSet} = useAppContext();
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
    const setSelectedSetToSheet = (setName: string) => {
        setSetName(setName);
    };
    const handleSetChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSet(e.target.value);
        const result = await api.sendSet(e.target.value);
        setSelectedSetToSheet?.(e.target.value);
    };
    return (
        <main className={s.container}>
            <div className={s.controlBlock}>
                <AirHeaterBlock tempSP={values.tempSP}/>
                <ProductBlock handleSetChange={handleSetChange}/>
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
