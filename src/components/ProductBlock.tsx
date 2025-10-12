import { useState } from "react";
import s from "./Card.module.css";
import api from "../services/ApiClient";

interface ProductBlockProps {
    sets: string[];
    user: string;
}

export function ProductBlock({ sets, user }: ProductBlockProps) {
    const [selectedSet, setSelectedSet] = useState<string>(sets[0] || "");
    const handleSetChange = async (newSet: string) => {
        setSelectedSet(newSet);
        const result = await api.sendSet(newSet);
    };
    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Product</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Select product</label>s
                    <select className={s.btn3} value={selectedSet}
                            onChange={(e) => handleSetChange(e.target.value)}>
                            {sets.map((set, index) => (
                                <option key={index} value={set}>
                                    {set}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
        </div>
    );
}