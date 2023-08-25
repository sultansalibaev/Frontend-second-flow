import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

interface NavbarProps {
    className?: string
}

export const Navbar = function ({ className = '' }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const { t } = useTranslation()

    return (
        <div className={classNames({}, [classes.Navbar, className])}>
            <ThemeSwitcher/>
            <div className={classes.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                    {t('Войти')}
                </Button>
                <Modal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                >
                    {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                    Libero molestias, vitae? Architecto aspernatur eaque enim id illo itaque,\n' +
                        '                    minima, nisi non placeat repudiandae, tenetur ullam voluptas voluptatem?\n' +
                        '                    Blanditiis laudantium, placeat.')}
                </Modal>
            </div>
        </div>
    )
}
