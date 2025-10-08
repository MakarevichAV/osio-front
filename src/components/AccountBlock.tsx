import {useState} from "react";
import s from "./Card.module.css";
import {LoginPopup} from "./LoginPopup";
import api from "../services/ApiClient"; // твой API-клиент

interface AccountBlockProps {
    userType: "Operator" | "Admin";
    userName: string;
    onLogin: (userType: "operator" | "admin", userName: string) => void;
}

export function AccountBlock({userType, userName, onLogin}: AccountBlockProps) {
    // const [userType, setUserType] = useState<"Operator" | "Admin">("Operator");
    // const [userName, setUserName] = useState("Samuel L. Jackson");

    const [showPopup, setShowPopup] = useState(false);
    // const [loginUser, setLoginUser] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");
    // const [error, setError] = useState("");

    // const openPopup = () => {
    //     setLoginUser("");
    //     setLoginPassword("");
    //     setError("");
    //     setShowPopup(true);
    // };

    // const closePopup = () => setShowPopup(false);

    // const handleLogin = async () => {
    //     try {
    //         // Пример запроса на сервер
    //         const result = await api.login(loginUser, loginPassword);
    //
    //         if (result.success && result.data) {
    //             onLogin(result.data.userType, result.data.userName);
    //             setShowPopup(false);
    //         } else {
    //             alert("❌ Invalid username or password");
    //             // остаёмся оператором
    //             onLogin("operator", "Samuel L. Jackson");
    //         }
    //     } catch (err: any) {
    //         setError(err.message || "Server error");
    //     }
    // };

    const handleLogout = () => {
        // при логауте возвращаемся к оператору по умолчанию
        onLogin("operator", "Samuel L. Jackson");
    };

    return (
        <div className={`${s.card} ${s.accountBlock}`}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Account</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Current user</label>
                    <div className={s.readBlock}>
                        <input className={s.input2} value={`${userType}: ${userName}`} disabled/>
                    </div>
                </div>

                <div
                    onClick={() => {
                        if (userType === "Admin") handleLogout();
                        else setShowPopup(true);
                    }}
                    className={s.btn2}>
                    {userType === "Admin" ? "Logout" : "Login"}
                </div>
            </div>

            {/* Popup окно */}
            {showPopup && (
                <LoginPopup
                    onClose={() => setShowPopup(false)}
                    onSuccess={onLogin}
                />
            )}
        </div>
    );
}