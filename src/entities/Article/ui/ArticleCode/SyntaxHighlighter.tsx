import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleCode.scss'
import { memo, useCallback, useRef, useState } from 'react'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode = memo((props: ArticleCodeProps) => {
    const {
        className = '',
        block
    } = props

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const [codeFocused, setCodeFocused] = useState('')

    const onFocused = useCallback(_ => {
        setCodeFocused('code-focused')
    }, [])

    const onBlured = useCallback(_ => {
        setCodeFocused('')
    }, [])

    return (
        <div className={classNames({}, ['ArticleCode', codeFocused, className])}>

            <div
                role="button"
                tabIndex={0}
                onKeyDown={() => textareaRef.current?.focus()}
                onClick={() => textareaRef.current?.focus()}
                className="relative flex bg-[#282a36]"
            >
                <textarea
                    className="absolute inset-0 resize-none bg-transparent p-2 font-mono text-transparent caret-white outline-none ml-[36px]"
                    ref={textareaRef}
                    value={block.code}
                    onChange={(e) => {
                        console.log(block.code, e.target.value)
                        block.code = e.target.value
                    }}
                    onFocus={onFocused}
                    onBlur={onBlured}
                />
                <SyntaxHighlighter
                    showLineNumbers={true}
                    language={
                        // eslint-disable-next-line i18next/no-literal-string
                        'javascript'
                    }
                    style={vscDarkPlus}
                    customStyle={{
                        flex: '1',
                        background: 'transparent'
                    }}
                >
                    {block.code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
})
