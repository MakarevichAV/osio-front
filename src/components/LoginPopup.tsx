import { useState } from "react";
import s from "./Card.module.css"; // или отдельный css для попапа
import api from "../services/ApiClient";

interface LoginPopupProps {
    onClose: () => void;
    onSuccess: (userType: "operator" | "admin", userName: string) => void;
}

export function LoginPopup({ onClose, onSuccess }: LoginPopupProps) {
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const result = await api.login(loginUser, loginPassword);

            if (result.success && result.data) {
                onSuccess(result.data.userType, result.data.userName);
                onClose();
            } else {
                setError("Invalid username or password");
                // остаёмся оператором
                onSuccess("operator", "Samuel L. Jackson");
            }
        } catch (err: any) {
            setError(err.message || "Server error");
        }
    };

    return (
        <div className={s.popupOverlay}>
            <div className={s.popup}>
                <div className={s.popupHeader}>
                    <span>Login</span>
                    <button className={s.closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={s.popupContent}>
                    <div>
                        <label>User:</label>
                        <input
                            type="text"
                            value={loginUser}
                            onChange={(e) => setLoginUser(e.target.value)}
                            className={s.input2}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className={s.input2}
                        />
                    </div>
                    {error && <div className={s.errorText}>{error}</div>}
                </div>
                <div className={s.popupFooter}>
                    <button className={s.btn2} onClick={handleLogin}>
                        Login
                    </button>
                    <button className={s.btn2} onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
