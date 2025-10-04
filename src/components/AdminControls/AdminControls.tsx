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
                    Users data setting
                </div>

                <div className={s.btn1}
                    onClick={onRecipeManagement}
                >
                    Recipe management
                </div>

        </div>
    );
}