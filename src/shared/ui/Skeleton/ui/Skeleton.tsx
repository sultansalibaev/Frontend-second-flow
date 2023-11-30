import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Skeleton.module.scss'
import { type CSSProperties, memo } from 'react'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
    margin?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className = '',
        height,
        width,
        borderRadius,
        margin
    } = props

    const styles: CSSProperties = {
        height,
        width,
        borderRadius,
        margin
    }

    return (
        <div
            className={classNames({}, [classes.Skeleton, className])}
            style={styles}
        >
        </div>
    )
})
