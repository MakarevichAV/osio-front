import s from './AdminControls.module.css';

interface AdminControlsProps {
    isAdmin: boolean;
    onUsersDataSetting: () => void;
    onRecipeManagement: () => void;
}

export function AdminControls({ isAdmin, onUsersDataSetting, onRecipeManagement }: AdminControlsProps) {
    if (!isAdmin) return null;

    return (
        <div className={s.adminControls}>

                <div className={s.btn1}
                    onClick={onUsersDataSetting}
                >
                    <div className="icon userSetting"></div>
                    Users data setting
                </div>

                <div className={s.btn1}
                    onClick={onRecipeManagement}
                >
                    <div className="icon list"></div>
                    Recipe management
                </div>

        </div>
    );
}