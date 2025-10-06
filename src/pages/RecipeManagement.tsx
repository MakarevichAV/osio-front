import {useEffect, useState} from "react";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
}

export function RecipeManagement() {
    const [recipes, setRecipes] = useState<RecipesResponse | null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

    return (
        <div style={{padding: "2rem"}}>
            <h1>Recipe Management</h1>
            {!recipes ? (
                <p>Loading...</p>
            ) : (
                <pre>{JSON.stringify(recipes, null, 2)}</pre>
            )}
        </div>
    );
}