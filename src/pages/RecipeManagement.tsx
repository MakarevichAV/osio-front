import {useEffect, useState} from "react";
import s from "./Recipes.module.css";
import {ProductBlock} from "../components/ProductBlock";

interface RecipesResponse {
    headers: string[];
    sets: Record<string, string>[];
    user: string;
}

export function RecipeManagement() {
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
                {/*<ProductBlock sets={setNames} user="admin"/>*/}
                <div className={s.controlPanel}>
                    <ProductBlock sets={setNames} user="admin"/>
                    <div className={s.buttonsBlock}>
                        <div className={`${s.btn} ${s.type1}`}>
                            <div className={s.icon}></div>
                            Add new set
                        </div>
                        <div className={`${s.btn} ${s.type2}`}>
                            <div className={s.icon}></div>
                            Delete current set
                        </div>
                        <div className={`${s.btn} ${s.type3}`}>
                            <div className={s.icon}></div>
                            Restore data
                        </div>
                        <div className={`${s.btn} ${s.type4}`}>
                            <div className={s.icon}></div>
                            Save data
                        </div>
                    </div>
                </div>
                {/*<div>*/}
                    <div className={s.tableWrapper}>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <th>Step №</th>
                                <th>ΔX</th>
                                <th>Z start</th>
                                <th>Z end</th>
                                <th>α</th>
                                <th>RPM</th>
                                <th>Idle</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.from({length: 30}, (_, i) => (
                                <tr key={i}>
                                    <td className={s.stepCell}>{i + 1}</td>
                                    <td><input type="number" className={s.input}/></td>
                                    <td><input type="number" className={s.input}/></td>
                                    <td><input type="number" className={s.input}/></td>
                                    <td><input type="number" className={s.input}/></td>
                                    <td><input type="number" className={s.input}/></td>
                                    <td><input type="number" className={s.input}/></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                {/*</div>*/}

            </div>

            <div style={{padding: "2rem"}}>
                <h1>Recipe Management</h1>
                {!recipes ? (
                    <p>Loading...</p>
                ) : (
                    <pre>{JSON.stringify(recipes, null, 2)}</pre>
                )}
            </div>
        </main>
    );
}