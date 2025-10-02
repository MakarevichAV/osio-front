import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";

const products = [
    { id: "product1", name: "Product A" },
    { id: "product2", name: "Product B" },
    { id: "product3", name: "Product C" },
    { id: "product4", name: "Product D" }
];

export function ProductBlock() {
    const [selectedProduct, setSelectedProduct] = useState<string>("");

    return (
        <div className="card-content">
            <div className="card-header">
                <div className="card-title">Product</div>
            </div>
            <div className="card-content">
                <div>
                    <label>Select product</label>
                    <select>
                        {/*<SelectTrigger>*/}
                        {/*    <SelectValue placeholder="Select product" />*/}
                        {/*</SelectTrigger>*/}
                        {/*<SelectContent>*/}
                        {/*    {products.map((product) => (*/}
                        {/*        <SelectItem key={product.id} value={product.id}>*/}
                        {/*            {product.name}*/}
                        {/*        </SelectItem>*/}
                        {/*    ))}*/}
                        {/*</SelectContent>*/}
                    </select>
                </div>
            </div>
        </div>
    );
}