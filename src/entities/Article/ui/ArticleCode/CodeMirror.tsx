import { classNames } from 'shared/lib/classNames/classNames'
import './ArticleCode.scss'
import { memo, useCallback, useState } from 'react'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'

import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { javascript } from '@codemirror/lang-javascript'

interface ArticleCodeProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode = memo((props: ArticleCodeProps) => {
    const {
        className = '',
        block
    } = props

    const [codeFocused, setCodeFocused] = useState('')

    const onFocused = useCallback(_ => {
        setCodeFocused('code-focused')
    }, [])

    const onBlured = useCallback(_ => {
        setCodeFocused('')
    }, [])

    return (
        <div className={classNames({}, ['ArticleCode', codeFocused, className])}>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Split direction='vertical' sizes={[60, 40]} minSize={60}>
                <CodeMirror
                    value={block.code}
                    theme={vscodeDark}
                    onChange={(code: string) => {
                        block.code = code
                    }}
                    extensions={[javascript()]}
                    style={{
                        fontFamily: 'Menlo, Monaco, Consolas, "Courier New", Courier, monospace',
                        fontSize: 14
                    }}
                    onFocus={onFocused}
                    onBlur={onBlured}
                />
            </Split>
        </div>
    )
})
