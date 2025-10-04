import { useState } from "react";
import s from "./Card.module.css";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "./ui/select";

const products = [
    { id: "product1", name: "Product A" },
    { id: "product2", name: "Product B" },
    { id: "product3", name: "Product C" },
    { id: "product4", name: "Product D" }
];

export function ProductBlock() {
    const [selectedProduct, setSelectedProduct] = useState<string>("");

    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Product</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Select product</label>
                    <select className={s.btn3}>
                            {products.map((product) => (
                                <div className={s.selectItem}>
                                    {product.name}
                                </div>
                            ))}
                    </select>
                </div>
            </div>
        </div>
    );
}