import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Mods = {
        [classes.square]: square ?? false,
        [classes.disabled]: disabled ?? false
    }

    return (
        <button
            className={classNames(mods, [
                classes.Button,
                classes[theme ?? ButtonTheme.OUTLINE],
                classes[size],
                className ?? ''
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
