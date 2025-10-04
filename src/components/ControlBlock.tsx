import { useState } from "react";
import s from "./Card.module.css"

export function ControlBlock() {
    const [processStatus, setProcessStatus] = useState<"idle" | "running" | "completed">("idle");
    const [isWinding, setIsWinding] = useState(false);

    const handleStartWinding = () => {
        setIsWinding(true);
        setProcessStatus("running");

        // Simulate winding process
        setTimeout(() => {
            setIsWinding(false);
            setProcessStatus("completed");

            // Reset after 2 seconds
            setTimeout(() => {
                setProcessStatus("idle");
            }, 2000);
        }, 5000);
    };

    const getStatusText = () => {
        switch (processStatus) {
            case "idle": return "Idle";
            case "running": return "Running";
            case "completed": return "Completed";
            default: return "Unknown";
        }
    };

    const getStatusVariant = () => {
        switch (processStatus) {
            case "idle": return "secondary" as const;
            case "running": return "default" as const;
            case "completed": return "outline" as const;
            default: return "secondary" as const;
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
                    <div className={s.readBlock}>
                        {getStatusText()}
                    </div>
                </div>

                <div onClick={handleStartWinding} className={s.btn2}>
                    {isWinding ? "Running..." : "START WINDING"}
                </div>
            </div>
        </div>
    );
}