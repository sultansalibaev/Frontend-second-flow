import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import classes from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = function ({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(
                {},
                [classes.ThemeSwitcher, className ?? '']
            )}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
