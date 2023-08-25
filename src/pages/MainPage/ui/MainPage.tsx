import { useTranslation } from 'react-i18next'
// import { Counter } from 'entities/Counter'
// import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            {/* <BugButton></BugButton> */}
            {t('Главная')}
            {/* <Counter/> */}
        </div>
    )
}

export default MainPage
