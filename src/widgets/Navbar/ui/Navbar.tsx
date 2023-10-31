import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { memo, useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { LoginModal, logout } from 'features/Authorization'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    // const onLogout = useCallback(() => {
    //     dispatch(userActions.logout())
    // }, [dispatch])

    const onLogout = useCallback(() => {
        void dispatch(logout())
    }, [dispatch])

    const { t } = useTranslation()

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (authData) {
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
    } else {
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
    }
})
