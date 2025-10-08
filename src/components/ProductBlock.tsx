import { useState } from "react";
import s from "./Card.module.css";
import api from "../services/ApiClient";

const products = [
    { id: "product1", name: "Product A" },
    { id: "product2", name: "Product B" },
    { id: "product3", name: "Product C" },
    { id: "product4", name: "Product D" }
];

interface ProductBlockProps {
    sets: string[];
}

export function ProductBlock({ sets }: ProductBlockProps) {
    // const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [selectedSet, setSelectedSet] = useState<string>(sets[0] || "");
    const handleSetChange = async (newSet: string) => {
        setSelectedSet(newSet);
        const result = await api.sendSet(newSet);
        // отправка на сервер через fetch или WebSocket
        // fetch(`http://localhost:3001/api/sendSet/${newSet}`, { method: "POST" })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));
    };
    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Product</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Select product</label>
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