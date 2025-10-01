import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {AdminControls} from "../AdminControls";

interface HeaderProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function Header({ userType, userName, onLogin }: HeaderProps) {
    const handleUsersDataSetting = () => {
        alert("Navigating to users data settings page");
    };

    const handleRecipeManagement = () => {
        alert("Navigating to recipe management page");
    };
    return (
        <header>
            <div className="header-top flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <span className="logo1 flex text-white items-center justify-center font-bold">O</span>
                    </div>
                    <span className="logo-txt text-xl font-semibold">MachineControl</span>
                </div>

                <div className="account-info flex">
                    <Button onClick={onLogin} variant="outline">
                        Login
                    </Button>
                </div>
            </div>
            <div className="user-info flex">
                <div className="user-stat">
                    {userType === "admin" ? "Admin" : "Operator"}
                </div>
                <span className="user-name">{userName}</span> &nbsp;&nbsp;
            </div>
            <div className="header-bottom">
                <AdminControls
                    isAdmin={userType === "admin"}
                    onUsersDataSetting={handleUsersDataSetting}
                    onRecipeManagement={handleRecipeManagement}
                />
            </div>
        </header>
    );
}