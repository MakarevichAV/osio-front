import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function AirHeaterBlock() {
    const [setpoint, setSetpoint] = useState<number>(25);
    const [isHeating, setIsHeating] = useState(false);

    const handleStartHeating = () => {
        setIsHeating(true);
        // Simulate heating process
        setTimeout(() => setIsHeating(false), 3000);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Air Heater</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="temperature">T°C setpoint</Label>
                    <Input
                        id="temperature"
                        type="number"
                        value={setpoint}
                        onChange={(e) => setSetpoint(Number(e.target.value))}
                        className="w-full"
                    />
                </div>

                <Button
                    onClick={handleStartHeating}
                    disabled={isHeating}
                    className="w-full"
                    variant={isHeating ? "secondary" : "default"}
                >
                    {isHeating ? "Heating..." : "Start heating"}
                </Button>
            </CardContent>
        </Card>
    );
}