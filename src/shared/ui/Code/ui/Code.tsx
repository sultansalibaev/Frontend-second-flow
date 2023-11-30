import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Code.module.scss'
import { memo, type ReactNode } from 'react'

interface CodeProps {
    className?: string
    children: ReactNode
}

export const Code = memo((props: CodeProps) => {
    const {
        className = '',
        children
    } = props

    return (
        <pre>
            <code className={classNames({}, [classes.Code, className])}>
                {children}
            </code>
        </pre>
    )
})
