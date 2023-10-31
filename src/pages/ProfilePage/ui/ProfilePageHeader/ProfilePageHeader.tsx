import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = function (props: ProfilePageHeaderProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)

    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames({}, [classes.ProfilePageHeader, className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        className={classes.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={classes.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={classes.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )
            }
        </div>
    )
}
