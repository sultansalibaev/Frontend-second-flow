import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props

    const additional: string[] = [
        classes.LoginForm,
        className,
        classes[theme],
        classes[align]
    ]

    return (
        <div className={classNames({}, additional)}>
            {Boolean(title) && <p className={classes.title}>{title}</p>}
            {Boolean(text) && <p className={classes.text}>{text}</p>}
        </div>
    )
})
