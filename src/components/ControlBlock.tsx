import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

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
        <div className="card">
            <div className="card-header">
                <div className="card-title">Control</div>
            </div>
            <div className="card-content">
                <div>
                    <label>Process status</label>
                    <div className="read-block">
                        {getStatusText()}
                    </div>
                </div>

                <div onClick={handleStartWinding}>
                    {isWinding ? "Running..." : "START WINDING"}
                </div>
            </div>
        </div>
    );
}