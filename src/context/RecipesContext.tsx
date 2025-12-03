import React, { createContext, useContext, useState } from "react";
import api from "../services/ApiClient";

export interface RecipesResponse {
    sets: Record<string, string>[];
    headers?: string[];
    user?: string;
}

interface ContextType {
    recipes: RecipesResponse | null;
    setRecipes: React.Dispatch<React.SetStateAction<RecipesResponse | null>>;
    setName: string;
    setSetName: React.Dispatch<React.SetStateAction<string>>;
    selectedSet: string;
    setSelectedSet: React.Dispatch<React.SetStateAction<string>>;
    sets: string[];
}

const Context = createContext<ContextType | undefined>(undefined);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);
    const [setName, setSetName] = useState('');
    const sets = recipes?.headers?.slice(2) || ["No sets"];
    const [selectedSet, setSelectedSet] = useState<string>(sets[0] || "");

    return (
        <Context.Provider value={{ recipes, setRecipes, setName, setSetName, selectedSet, setSelectedSet, sets}}>
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useAppContext must be used within a Provider");
    }
    return context;
};