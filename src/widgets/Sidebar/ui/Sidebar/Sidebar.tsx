import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import './Sidebar.scss'
import { memo, useCallback, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useTheme } from 'app/providers/ThemeProvider'
import { logout } from 'features/Authorization'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const dispatch = useAppDispatch()

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

    const { theme, toggleTheme } = useTheme()

    const onLogout = useCallback(() => {
        void dispatch(logout())
    }, [dispatch])

    return (
        <aside
            data-testid="sidebar"
            className={classNames({ close: collapsed }, ['flex flex-col relative', classes.Sidebar, className ?? ''])}
        >

            <div className="bg-image">
                <div className="blured-img"></div>
            </div>
            <div
                className="toggle"
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                <i className="bx bx-chevron-right"></i>
            </div>
            <div className="flex items-center">
                <span className="image flex items-center justify-center">
                    <img src="https://www.codingnepalweb.com/demos/sidebar-menu-in-html-css-javascript-dark-light-mode/logo.png" alt="" />
                </span>

                <div className="text logo-text truncate">
                    <span className="name">Codinglab</span>
                    <span className="profession">Web developer</span>
                </div>
            </div>

            <nav className="nav-items flex flex-col h-full">
                <a href="#" className="nav-item search-box ignore-hover">
                    <i className="bx bx-search icon"></i>
                    <input type="text" className={'placeholder-gray-500'} placeholder="Search..." />
                </a>

                <a href="#" className="nav-item">
                    <i className='bx bx-home-alt icon'></i>
                    <span className="text nav-text truncate">Main</span>
                </a>

                <a href="#" className="nav-item">
                    <i className='bx bx-info-circle icon'></i>
                    <span className="text nav-text truncate">About</span>
                </a>

                <a href="#" className="nav-item">
                    <i className='bx bx-user icon'></i>
                    <span className="text nav-text truncate">Profile</span>
                </a>

                <a href="#" className="nav-item">
                    <i className='bx bx-news icon'></i>
                    <span className="text nav-text truncate">Articles</span>
                </a>
            </nav>
            <div className="nav-footer mt-auto">
                <a href="#" className="nav-item mt-[10]" onClick={onLogout}>
                    <i className='bx bx-log-out icon'></i>
                    <span className="text nav-text truncate">Logout</span>
                </a>
                <div className="nav-item ignore-hover theme truncate" onClick={toggleTheme}>
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="text theme-text">Dark theme</span>

                    <div className="toggle-theme">
                        <span className="switch"></span>
                    </div>
                </div>
            </div>
            {/* =================================== */}

            {/* <Button */}
            {/*     data-testid="sidebar-toggle" */}
            {/*     onClick={onToggle} */}
            {/*     className={classes.collapsedBtn} */}
            {/*     theme={ButtonTheme.BACKGROUND_INVERTED} */}
            {/*     size={ButtonSize.L} */}
            {/*     square */}
            {/* > */}
            {/*     { collapsed ? '>' : '<' } */}
            {/* </Button> */}
            {/* <div className={classes.items}> */}
            {/*     {itemsList} */}
            {/* </div> */}
            {/* <div className={classes.switchers}> */}
            {/*     <ThemeSwitcher/> */}
            {/*     <LangSwitcher short={collapsed} className={classes.lang}/> */}
            {/* </div> */}
        </aside>
    )
})
