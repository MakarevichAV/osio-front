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
        <Card>
            <CardContent>
                <Button
                    onClick={onUsersDataSetting}
                >
                    <Settings />
                    Users data setting
                </Button>

                <Button
                    onClick={onRecipeManagement}
                >
                    <BookOpen />
                    Recipe management
                </Button>
            </CardContent>
        </Card>
    );
}