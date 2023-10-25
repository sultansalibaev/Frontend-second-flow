import classes from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props

    const { t } = useTranslation()

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
