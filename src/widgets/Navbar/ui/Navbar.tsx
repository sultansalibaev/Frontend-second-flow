import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { memo, useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { LoginModal } from 'features/Authorization'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const { t } = useTranslation()

    if (authData != null) {
        return (
            <div className={classNames({}, [classes.Navbar, className])}>

                <ThemeSwitcher/>
                <div className={classes.links}>
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames({}, [classes.Navbar, className])}>
            <ThemeSwitcher/>
            <div className={classes.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </div>
        </div>
    )
})
