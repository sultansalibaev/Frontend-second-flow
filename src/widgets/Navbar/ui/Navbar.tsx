import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
    className?: string
}

export const Navbar = function ({ className = '' }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const { t } = useTranslation()

    return (
        <div className={classNames({}, [classes.Navbar, className])}>
            <ThemeSwitcher/>
            <div className={classes.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    {t('Войти')}
                </Button>
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            </div>
        </div>
    )
}
