import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = function (props) {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [classes.square]: square ?? false
    }

    return (
        <button
            className={classNames(mods, [classes.Button, classes[theme ?? ''], classes[size], className ?? ''])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
