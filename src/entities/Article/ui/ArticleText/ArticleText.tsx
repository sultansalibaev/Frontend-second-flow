import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleText.scss'
import { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'

interface ArticleTextProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleText = memo((props: ArticleTextProps) => {
    const {
        className = '',
        block
    } = props

    return (
        <div
            className={classNames({}, ['ArticleText', className])}
            dangerouslySetInnerHTML={{ __html: block.html }}
        >
        </div>
    )
})
