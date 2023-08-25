import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = function ({ className }: SidebarProps) {
    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(!collapsed) // alternative setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames({ [classes.collapsed]: collapsed }, [classes.Sidebar, className ?? ''])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classes.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={classes.item}
                >
                    <MainIcon className={classes.icon}/>
                    <span className={classes.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={classes.item}
                >
                    <AboutIcon className={classes.icon}/>
                    <span className={classes.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={classes.lang}/>
            </div>
        </div>
    )
}
