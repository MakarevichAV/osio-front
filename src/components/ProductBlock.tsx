import React, {useState} from "react";
import {useAppContext} from '../context/RecipesContext';
import s from "./Card.module.css";
import api from "../services/ApiClient";

interface ProductBlockProps {
    handleSetChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    // setSelectedSetToSheet?: (newSet: string) => void
    handleSave: () => void;
}

// interface ContextData {
//     sets: string[],
//     selectedSet: string,
//     setSelectedSet: React.Dispatch<React.SetStateAction<string>>;
// }

export function ProductBlock({handleSetChange, handleSave}: ProductBlockProps) {

    const {selectedSet, sets} = useAppContext();

    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Product</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Select product</label>s
                    <select className={s.btn3} value={selectedSet}
                            onChange={handleSetChange}>
                        <option>Select set</option>
                        {sets.map((set: string, index: number) => (
                            <option key={index} value={set}>
                                {set}
                            </option>
                        ))}
                    </select>
                    <button className={`${s.btn} ${s.type4}`}
                            onClick={() => handleSave()}>
                        <div className={s.icon}></div>
                        Save data
                    </button>
                </div>
            </div>
        </div>
    );
}