import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss'
import { type ChangeEvent, memo, useEffect, useRef, useState } from 'react'

// type HTMLInputProps = Omit<HTMLInputElement, 'className' | 'value' | 'onChange' | 'type' | 'readonly'>

interface InputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    type?: string
    placeholder?: string
    autofocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder = '',
        autofocus,
        readonly = false,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const isCaretVisible = isFocused && !readonly

    useEffect(() => {
        if (autofocus === true) {
            // setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
        setCaretPosition(event.target.value.length)
    }

    const onSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart ?? 0)
    }

    const mods: Mods = {
        [classes.readonly]: readonly
    }

    return (
        <div className={classNames(mods, [classes.InputWrapper, className])}>
            { Boolean(placeholder) && (
                <div className={classes.placeholder}>
                    {`${placeholder}>`}
                </div>
            ) }
            <div className={classes.caretWrapper}>
                <input
                    ref={ref}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classes.input}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={classes.caret}
                        style={{ left: `${caretPosition * 8.87}px` }}
                    />
                )}
            </div>
        </div>
    )
})
