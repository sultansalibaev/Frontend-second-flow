import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = function (props: AvatarProps) {
    const {
        className = '',
        src,
        size,
        alt
    } = props

    const styles = useMemo<CSSProperties>(() => ({
        width: size ?? 100,
        height: size ?? 100
    }), [size])

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames({}, [classes.Avatar, className])}
        />
    )
}
