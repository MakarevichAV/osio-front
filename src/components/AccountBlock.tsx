import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

interface AccountBlockProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function AccountBlock({ userType, userName, onLogin }: AccountBlockProps) {
    return (
        <Card className="hidden lg:block">
            <CardHeader>
                <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Current user</Label>
                    <div className="flex items-center space-x-2">
                        <Badge variant={userType === "admin" ? "default" : "secondary"}>
                            {userType === "admin" ? "Admin" : "Operator"}
                        </Badge>
                        <span>{userName}</span>
                    </div>
                </div>

                <Button onClick={onLogin}>
                    Login
                </Button>
            </CardContent>
        </Card>
    );
}