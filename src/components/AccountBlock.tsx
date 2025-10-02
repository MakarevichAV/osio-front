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
        <div className="card-content">
            <div className="card-header">
                <div className="card-title">Account</div>
            </div>
            <div className="card-content">
                <div>
                    <label>Current user</label>
                    <div className="flex items-center space-x-2">
                        <div className="read-block">
                            {userType === "admin" ? "Admin" : "Operator"}
                        </div>
                        <span>{userName}</span>
                    </div>
                </div>

                <div onClick={onLogin}>
                    Login
                </div>
            </div>
        </div>
    );
}