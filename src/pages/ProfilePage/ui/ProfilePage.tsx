import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = function (props: ProfilePageProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames({}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
