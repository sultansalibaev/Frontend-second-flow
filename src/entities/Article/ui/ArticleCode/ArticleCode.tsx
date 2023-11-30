import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleCode.scss'
import { memo } from 'react'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core.js'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

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

            <Editor
                value={block.code}
                onValueChange={code => {
                    block.code = code
                }}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", Courier, monospace\n',
                    fontSize: 14
                }}
                tabSize={4}
            />
        </div>
    )
})
