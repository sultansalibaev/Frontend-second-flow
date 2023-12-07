import { classNames } from 'shared/lib/classNames/classNames'
import './Code.scss'
import { memo, useCallback, useState } from 'react'
import Split from 'react-split'
import CodeMirror, { type ReactCodeMirrorProps } from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { javascript } from '@codemirror/lang-javascript'
import { type ArticleCodeBlock } from 'entities/Article/model/types/article'
import { Button } from 'shared/ui/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Icon } from 'shared/ui/Icon'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

interface CodeMirrorProps {
    className?: string
    editable?: boolean
    onChange?: (code: string) => void
    block: ArticleCodeBlock
}

export const Code = memo((props: CodeMirrorProps) => {
    const {
        className = '',
        editable = false,
        block,
        onChange,
        ...args
    } = props

    const [codeFocused, setCodeFocused] = useState('')

    const onFocused = useCallback(() => {
        if (editable) setCodeFocused('code-focused')
    }, [editable])

    const onBlured = useCallback(() => {
        setCodeFocused('')
    }, [])

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(block.code)
    }, [block])

    return (
        <div className={classNames({}, ['Code', 'relative', codeFocused, className])}>

            <Button
                className={'absolute top-[10px] right-[10px] z-[1] cursor-pointer [&:not(:hover)]:opacity-[.6] transition-opacity'}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} className={'stroke-[--code-btn] !fill-transparent'}></Icon>
            </Button>

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Split direction='vertical' sizes={[60, 40]} minSize={60}>
                <CodeMirror
                    editable={editable}
                    value={block.code}
                    theme={vscodeDark}
                    onFocus={onFocused}
                    onBlur={onBlured}
                    onChange={onChange}
                    extensions={[javascript()]}
                    style={{
                        fontFamily: 'Menlo, Monaco, Consolas, "Courier New", Courier, monospace',
                        fontSize: 14
                    }}
                    {...args as ReactCodeMirrorProps}
                />
            </Split>
        </div>
    )
})
