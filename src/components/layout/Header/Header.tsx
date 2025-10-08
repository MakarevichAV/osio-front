import { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {AdminControls} from "../../AdminControls/AdminControls";
import s from "./Header.module.css";
import {LoginPopup} from "../../LoginPopup";

interface HeaderProps {
    userType: "Operator" | "Admin";
    userName: string;
    onLogin: (userType: "operator" | "admin", userName: string) => void;
}

export function Header({ userType, userName, onLogin }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleLogoClick = () => navigate("/");
    const handleGoHome = () => navigate("/");

    const handleUsersDataSetting = () => {
        alert("Navigating to users data settings page");
    };

    const handleRecipeManagement = () => navigate("/recipes");

    const isRecipePage = location.pathname === "/recipes";

    const handleLogout = () => {
        // при логауте возвращаемся к оператору по умолчанию
        onLogin("operator", "Samuel L. Jackson");
    };

    return (
        <header className={s.header}>
            {/* Верхняя часть шапки */}
            <div className={s.headerTop}>
                <div className={s.logo} onClick={handleLogoClick}>
                    <div className={s.logoImg}>
                        <div className={s.logoInside}></div>
                    </div>
                    <span className={s.logoTxt}>MachineControl</span>
                </div>

                <div className={s.accountInfo}>
                    <div
                        className={s.btn1}
                        onClick={() => {
                            if (userType === "Admin") handleLogout();
                            else setShowLoginPopup(true);
                        }}
                    >
                        {userType === "Admin" ? "Logout" : "Login"}
                    </div>
                </div>
            </div>

            {/* Статус пользователя */}
            <div className={s.userInfo}>
                <div className={s.userStat}>
                    {userType === "Admin" ? "Admin" : "Operator"}
                </div>
                <span className={s.userName}>{userName}</span>
            </div>

            {/* Админские элементы внизу */}
            <div className={s.headerBottom}>
                {userType === "Admin" && !isRecipePage && (
                    <AdminControls
                        isAdmin={true}
                        onUsersDataSetting={handleUsersDataSetting}
                        onRecipeManagement={handleRecipeManagement}
                    />
                )}

                {isRecipePage && (
                    <div className={s.adminControls}>
                        <div className={s.btn2} onClick={handleGoHome}>
                            <div className="icon home"></div>
                            Go to Home
                        </div>
                    </div>
                )}
            </div>

            {/* Popup логина */}
            {showLoginPopup && (
                <LoginPopup
                    onClose={() => setShowLoginPopup(false)}
                    onSuccess={(type, name) => {
                        onLogin(type, name);
                        setShowLoginPopup(false);
                    }}
                />
            )}
        </header>
    );
}
