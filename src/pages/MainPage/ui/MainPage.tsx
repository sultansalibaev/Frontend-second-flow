import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Input } from 'shared/ui/Input/Input'
// import { Counter } from 'entities/Counter'
// import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            {/* <BugButton></BugButton> */}
            {t('Главная')}
            {/* <Counter/> */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input value={value} onChange={onChange} placeholder={'Введите текст'}/>
        </div>
    )
}

export default MainPage
