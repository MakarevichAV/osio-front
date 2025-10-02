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
        <div className="card">
            <div className="card-header">
                <div className="card-title">Air Heater</div>
            </div>
            <div className="card-content">
                <div>
                    <Label htmlFor="temperature">T°C setpoint</Label>
                    <input
                        id="temperature"
                        type="number"
                        value={setpoint}
                        onChange={(e) => setSetpoint(Number(e.target.value))}
                        className="input1"
                    />
                </div>

                <div onClick={handleStartHeating}>
                    {isHeating ? "Heating..." : "Start heating"}
                </div>
            </div>
        </div>
    );
}