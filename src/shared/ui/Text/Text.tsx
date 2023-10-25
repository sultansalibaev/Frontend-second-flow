import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        theme = TextTheme.PRIMARY
    } = props

    return (
        <div className={classNames({}, [classes.LoginForm, className, classes[theme ?? '']])}>
            {Boolean(title) && <p className={classes.title}>{title}</p>}
            {Boolean(text) && <p className={classes.text}>{text}</p>}
        </div>
    )
})
