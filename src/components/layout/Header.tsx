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
            <div className="header-top">
                <div className="logo">
                    <div className="logo-img">
                        <span>O</span>
                    </div>
                    <span className="logo-txt">MachineControl</span>
                </div>

                <div className="account-info">
                    <div className="btn1">Login</div>
                </div>
            </div>
            <div className="user-info">
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