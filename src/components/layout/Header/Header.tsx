import { useNavigate, useLocation } from "react-router-dom";
import { AdminControls } from "../../AdminControls/AdminControls";
import s from "./Header.module.css";

interface HeaderProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function Header({ userType, userName, onLogin }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation(); // узнаём текущий путь

    const handleUsersDataSetting = () => {
        alert("Navigating to users data settings page");
    };

    const handleRecipeManagement = () => {
        navigate("/recipes");
    };

    const handleGoHome = () => {
        navigate("/"); // возвращаемся на ProcessManagement
    };

    const handleLogoClick = () => {
        navigate("/"); // тоже домой
    };

    // Определяем, на какой странице мы сейчас
    const isRecipePage = location.pathname === "/recipes";

    return (
        <header className={s.header}>
            <div className={s.headerTop}>
                <div className={s.logo} onClick={handleLogoClick}>
                    <div className={s.logoImg}>
                        <div className={s.logoInside}></div>
                    </div>
                    <span className={s.logoTxt}>MachineControl</span>
                </div>

                <div className={s.accountInfo}>
                    <div className={s.btn1} onClick={onLogin}>
                        {userType === "admin" ? "Logout" : "Login"}
                    </div>
                </div>
            </div>

            <div className={s.userInfo}>
                <div className={s.userStat}>
                    {userType === "admin" ? "Admin" : "Operator"}
                </div>
                <span className={s.userName}>{userName}</span>
            </div>

            <div className={s.headerBottom}>
                {userType === "admin" && !isRecipePage && (
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
        </header>
    );
}
