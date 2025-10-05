import {AdminControls} from "../../AdminControls/AdminControls";
import s from "./Header.module.css";

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
        <header className={s.header}>
            <div className={s.headerTop}>
                <div className={s.logo}>
                    <div className={s.logoImg}>
                        <div className={s.logoInside}></div>
                    </div>
                    <span className={s.logoTxt}>MachineControl</span>
                </div>

                <div className={s.accountInfo}>
                    <div className={s.btn1}>Login</div>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.userStat}>
                    {userType === "admin" ? "Admin" : "Operator"}
                </div>
                <span className={s.userName}>{userName}</span> &nbsp;&nbsp;
            </div>
            <div className={s.headerBottom}>
                <AdminControls
                    isAdmin={userType === "admin"}
                    onUsersDataSetting={handleUsersDataSetting}
                    onRecipeManagement={handleRecipeManagement}
                />
            </div>
        </header>
    );
}