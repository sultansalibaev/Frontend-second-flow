import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleTitle.scss'
import { memo } from 'react'
import { type ArticleTitleBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTitleProps {
    className?: string
    block: ArticleTitleBlock
}

export const ArticleTitle = memo((props: ArticleTitleProps) => {
    const {
        className = '',
        block
    } = props

    return (
        <div className={classNames({}, ['ArticleTitle', className])}>
            <Text
                title={block.title}
                // size={block.size}
            />
        </div>
    )
})
