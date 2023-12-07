import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { type ArticleImageBlock } from '../../model/types/article'

interface ArticleImageProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImage = memo((props: ArticleImageProps) => {
    const {
        className = '',
        block
    } = props

    return (
        <div className={classNames({}, [className])}>
            <img className={'max-w-full mx-auto'} src={block.src} alt={block.subtitle} />
        </div>
    )
})
