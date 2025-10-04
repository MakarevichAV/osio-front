import { useState } from "react";
import { Label } from "./ui/label";
import s from './Card.module.css';

export function AirHeaterBlock() {
    const [setpoint, setSetpoint] = useState<number>(25);
    const [isHeating, setIsHeating] = useState(false);

    const handleStartHeating = () => {
        setIsHeating(true);
        setTimeout(() => setIsHeating(false), 3000);
    };

    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Air Heater</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <Label htmlFor="temperature">T°C setpoint</Label>
                    <input
                        id="temperature"
                        type="number"
                        value={setpoint}
                        onChange={(e) => setSetpoint(Number(e.target.value))}
                        className={s.input1}
                    />
                </div>

                <div onClick={handleStartHeating} className={s.btn2}>
                    {isHeating ? "Heating..." : "Start heating"}
                </div>
            </div>
        </div>
    );
}