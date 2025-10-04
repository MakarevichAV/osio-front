import s from "./Card.module.css";

interface AccountBlockProps {
    userType: "operator" | "admin";
    userName: string;
    onLogin: () => void;
}

export function AccountBlock({ userType, userName, onLogin }: AccountBlockProps) {
    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <div className={s.cardTitle}>Account</div>
            </div>
            <div className={s.cardContent}>
                <div>
                    <label>Current user</label>
                    <div className="">
                        <div className={s.readBlock}>
                            {userType === "admin" ? "Admin" : "Operator"}
                        </div>
                        <span>{userName}</span>
                    </div>
                </div>

                <div onClick={onLogin} className={s.btn2}>
                    Login
                </div>
            </div>
        </div>
    );
}