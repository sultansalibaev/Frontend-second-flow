import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select'
import { Country } from '../../model/types/country'
import { memo, useCallback } from 'react'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russian, content: Country.Russian },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Armenia, content: Country.Armenia }
]

export const CountrySelect = memo(function (props: CountrySelectProps) {
    const {
        className = '',
        onChange,
        value,
        readonly
    } = props

    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            className={classNames({}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
