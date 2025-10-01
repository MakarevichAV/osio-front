import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Settings, BookOpen } from "lucide-react";

interface AdminControlsProps {
    isAdmin: boolean;
    onUsersDataSetting: () => void;
    onRecipeManagement: () => void;
}

export function AdminControls({ isAdmin, onUsersDataSetting, onRecipeManagement }: AdminControlsProps) {
    if (!isAdmin) return null;

    return (
        <div className="admin-controls">

                <div className="btn1"
                    onClick={onUsersDataSetting}
                >
                    Users data setting
                </div>

                <div className="btn1"
                    onClick={onRecipeManagement}
                >
                    Recipe management
                </div>

        </div>
    );
}