import React, {useEffect, useState} from "react";
import {useAppContext} from '../context/RecipesContext';

import s from "./Recipes.module.css";
import {ProductBlock} from "../components/ProductBlock";
import api from "../services/ApiClient";

interface RecipesResponse {
    // headers: string[];
    // sets: Record<string, string>[];
    // user: string;
    sets: Record<string, string>[];
    headers?: string[] | undefined;
    user?: string | undefined;
}

interface SetValues {
    angleValues: number[];
    deltaXValues: number[];
    zStartValues: number[];
    zEndValues: number[];
    rpmValues: number[];
    idle: number[];
}

export function RecipeManagement() {
    const {recipes, setRecipes, setName, setSetName, selectedSet, setSelectedSet} = useAppContext();
    const [data, setData] = useState<SetValues>({
        angleValues: [],
        deltaXValues: [],
        zStartValues: [],
        zEndValues: [],
        rpmValues: [],
        idle: []
    });
    useEffect(() => {
        fetch("http://localhost:3001/api/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);
    // const setNames = recipes?.headers?.slice(2) || ["No sets"];

    const handleChange = (index: number, setName: string, value: string) => {
        const newSets: Record<string, string>[] = [...(recipes?.sets || [])];
        newSets[index][setName] = value;
        setRecipes({...recipes, sets: newSets});
    }

    async function handleSave() {
        await fetch("http://localhost:3001/api/recipes/save", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                ...recipes,
                selectedSet
            })
        });
    }

    // const handleChange = (
    //     index: number,
    //     setName: string, // если нужно использовать setName внутри
    //     value: string,   // из e.target.value приходит строка
    //     field: keyof SetValues // 'deltaXValues' | 'zStartValues' | ...
    // ) => {
    //     const numValue = parseFloat(value) || 0;
    //
    //     setData((prev) => ({
    //         ...prev,
    //         [field]: prev[field].map((v, i) => (i === index ? numValue : v)),
    //     }));
    // };

    // const [setName, setSetName] = useState<string>('');
    const setSelectedSetToSheet = (setName: string) => {
        setSetName(setName);
    };
    const handleSetChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSet(e.target.value);
        const result = await api.sendSet(e.target.value);
        setData(result.data.payload);
        console.log(result)
        console.log(recipes)
        setSelectedSetToSheet?.(e.target.value);
    };
    const handleAddNewSet = () => {
        console.log('adding new recipe');
    }

    return (
        <main className={s.container}>
            <div className={s.controlBlock}>
                {/*<ProductBlock sets={setNames} user="admin"/>*/}
                <div className={s.controlPanel}>
                    <ProductBlock
                        handleSetChange={handleSetChange}
                        handleSave={handleSave}
                    />
                    <div className={s.buttonsBlock}>
                        <button className={`${s.btn} ${s.type1}`}
                                onClick={() => handleAddNewSet()}>
                            <div className={s.icon}></div>
                            Add new set
                        </button>
                        <button className={`${s.btn} ${s.type2}`}>
                            <div className={s.icon}></div>
                            Delete current set
                        </button>
                        <button className={`${s.btn} ${s.type3}`}>
                            <div className={s.icon}></div>
                            Restore data
                        </button>
                        {/*<button className={`${s.btn} ${s.type4}`}*/}
                        {/*        onClick={() => handleSave()}>*/}
                        {/*    <div className={s.icon}></div>*/}
                        {/*    Save data*/}
                        {/*</button>*/}
                    </div>
                </div>
                {/*<div>*/}
                <div className={s.tableWrapper}>
                    <table className={s.table}>
                        <thead>
                        <tr>
                            <th>Step №</th>
                            <th>ΔX</th>
                            {/* 31-60 */}
                            <th>Z start</th>
                            {/* 61-90 */}
                            <th>Z end</th>
                            {/* 91-120 */}
                            <th>α</th>
                            {/* 1-30 */}
                            <th>RPM</th>
                            {/* 121-150 */}
                            <th>Idle</th>
                            {/* 151-180 */}
                        </tr>
                        </thead>
                        {/*<tbody>*/}
                        {/*{*/}
                        {/*    Array.from({length: 30}, (_, i) => (*/}
                        {/*        <tr key={i}>*/}
                        {/*            <td className={s.stepCell}>{i + 1}</td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.deltaXValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'deltaXValues')}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'zStartValues')}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zEndValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'zEndValues')}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.angleValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'angleValues')}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.rpmValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'rpmValues')}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.idle[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value, 'idle')}/>*/}
                        {/*            </td>*/}

                        {/*        </tr>*/}
                        {/*    ))*/}
                        {/*}*/}

                        {/*{!recipes ? Array.from({length: 30}, (_, i) => (*/}
                        {/*        <tr key={i}>*/}
                        {/*            <td className={s.stepCell}>{i + 1}</td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.deltaXValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*            <td>*/}
                        {/*                <input type="number"*/}
                        {/*                       className={s.input}*/}
                        {/*                       value={data.zStartValues[i]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/>*/}
                        {/*            </td>*/}
                        {/*        </tr>*/}
                        {/*    ))*/}
                        {/*    :*/}
                        {/*    recipes.sets.map((step, i) => (*/}
                        {/*        <tr key={i}>*/}
                        {/*            <td className={s.stepCell}>{i + 1}</td>*/}
                        {/*            <td><input type="number" className={s.input} value={recipes.sets[i+30][`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*            <td><input type="number" className={s.input} value={recipes.sets[i+60][`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*            <td><input type="number" className={s.input} value={recipes.sets[i+90][`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*            <td><input type="number" className={s.input} value={step[`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*            <td><input type="number" className={s.input} value={recipes.sets[i+120][`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*            <td><input type="number" className={s.input} value={recipes.sets[i+150][`${setName}`]}*/}
                        {/*                       onChange={(e) => handleChange(i, setName, e.target.value)}/></td>*/}
                        {/*        </tr>*/}
                        {/*    ))*/}
                        {/*}*/}

                        {/*</tbody>*/}


                        <tbody>
                        {!recipes
                            ? Array.from({length: 30}, (_, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className={s.stepCell}>{rowIndex + 1}</td>
                                    {Array.from({length: 6}, (_, colIndex) => (
                                        <td key={colIndex}>
                                            <input type="number" className={s.input}/>
                                        </td>
                                    ))}
                                </tr>
                            ))
                            : (() => {
                                const rowCount = 30;
                                const colOffsets = [30, 60, 90, 0, 120, 150]; // порядок соответствует твоим колонкам: i+90, i, i+30...
                                return Array.from({length: rowCount}, (_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className={s.stepCell}>{rowIndex + 1}</td>
                                        {colOffsets.map((offset, colIndex) => {
                                            const item = recipes.sets[rowIndex + offset];
                                            return (
                                                <td key={colIndex}>
                                                    <input
                                                        type="number"
                                                        className={s.input}
                                                        value={item?.[setName] || ""}
                                                        onChange={(e) =>
                                                            handleChange(rowIndex + offset, setName, e.target.value)
                                                        }
                                                    />
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ));
                            })()}
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