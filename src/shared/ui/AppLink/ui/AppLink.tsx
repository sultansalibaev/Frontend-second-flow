import { classNames } from 'shared/lib/classNames/classNames'
import classes from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { memo, type ReactNode } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo(function (props: AppLinkProps) {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={classNames({}, [classes[theme], classes.AppLink, className ?? ''])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
