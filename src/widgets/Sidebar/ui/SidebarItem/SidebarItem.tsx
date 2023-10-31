import classes from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props

    const isAuth = useSelector(getUserAuthData)

    const { t } = useTranslation()

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames({ [classes.collapsed]: collapsed }, [classes.item])}
        >
            <item.Icon className={classes.icon}/>
            <span className={classes.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
