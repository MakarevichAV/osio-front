import React from "react";
import s from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.content}>
                <div className={s.logo}></div>
                <div className={s.contact}>
                    <span>📞 +1 234 567 890</span>
                    <span>✉️ support@machinecontrol.com</span>
                </div>
            </div>
        </footer>
    );
}