import {useEffect, useState} from "react";
import {Label} from "./ui/label";
import s from './Card.module.css';
import api from "../services/ApiClient";

type AirHeaterBlockProps = {
    tempSP: number | null;
};

export function AirHeaterBlock({tempSP}: AirHeaterBlockProps) {
    const [setpoint, setSetpoint] = useState<number>(0);
    const [isHeating, setIsHeating] = useState(false);
    useEffect(() => {
        if (tempSP !== null && !isNaN(tempSP)) {
            setSetpoint(tempSP);
        }
    }, [tempSP]);
    const handleStartHeating = async() => {
        // setIsHeating(true);
        const result = await api.startHeating();
        // fetch(`http://localhost:3001/api/start-heating`, { method: "POST" })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));
        // setTimeout(() => setIsHeating(false), 3000);
    };

    const handleTemperChange = async (sp: number) => {
        setSetpoint(sp);
        const result = await api.setSetpoint(sp);
        // fetch(`http://localhost:3001/api/set-setpoint`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ value: sp }),
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));
    }

    ///api/start-heating

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
                        onChange={(e) => handleTemperChange(Number(e.target.value))}
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