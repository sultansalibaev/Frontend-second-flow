import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleImage.module.scss'
import { memo } from 'react'

interface ArticleImageProps {
    className?: string
}

export const ArticleImage = memo((props: ArticleImageProps) => {
    const {
        className = ''
    } = props

    return (
        <div className={classNames({}, [classes.ArticleImage, className])}>
            ArticleImage
        </div>
    )
})
