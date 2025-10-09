import s from "./Card.module.css";
import api from "../services/ApiClient";

interface ControlBlockProps {
    status: number;
}

export function ControlBlock({status}: ControlBlockProps) {
    const handleStartWinding = async () => {
        const result = await api.startWinding();
    };
    const getStatusText = () => {
        switch (status) {
            case 0:
                return "Not ready";
            case 1:
                return "Ready to start";
            case 2:
                return "Winding";
            case 3:
                return "Finished";
            default:
                return "Unknown";
        }
    };

    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardtitle}>Control</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Process status</label>
                    <input className={s.input2} value={getStatusText()} disabled/>
                </div>

                <div
                    onClick={status === 1 ? handleStartWinding : undefined}
                    className={`${s.btn4} ${status !== 1 ? '' : s.active}`}
                >
                    START WINDING
                </div>
            </div>
        </div>
    );
}