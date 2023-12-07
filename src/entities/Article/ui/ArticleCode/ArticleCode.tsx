import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleCode.scss'
import { memo } from 'react'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'

import { Code } from 'shared/ui/Code'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode = memo((props: ArticleCodeProps) => {
    const {
        className = '',
        block
    } = props

    return (
        <div className={classNames({}, ['ArticleCode', className])}>

            <Code block={block} editable={false} />
        </div>
    )
})
