import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
    value?: string
    readonly?: boolean
}

export const Select = memo(function (props: SelectProps) {
    const {
        className = '',
        label,
        options,
        onChange,
        value,
        readonly
    } = props

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value)
    }

    const optionsList = useMemo(() => (
        options?.map(option => (
            <option
                className={classes.option}
                value={option.value}
                key={option.value}
            >
                {option.content}
            </option>
        ))
    ), [options])

    // const { t } = useTranslation()

    return (
        <div className={classNames({}, [classes.Wrapper, className])}>
            {label !== undefined && (
                <span className={classes.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={classes.select}
                onChange={onChangeHandler}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    )
})
