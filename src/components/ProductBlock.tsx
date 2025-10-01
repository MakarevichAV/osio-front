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
        <Card>
            <CardHeader>
                <CardTitle>Product</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="product-select">Select product</Label>
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                            {products.map((product) => (
                                <SelectItem key={product.id} value={product.id}>
                                    {product.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}