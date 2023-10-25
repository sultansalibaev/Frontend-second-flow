import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(!collapsed) // alternative setCollapsed(prev => !prev)
    }

    const itemsList = useMemo(() => (
        SidebarItemsList.map(item => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        ))
    ), [collapsed])

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
                {itemsList}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={classes.lang}/>
            </div>
        </div>
    )
})
