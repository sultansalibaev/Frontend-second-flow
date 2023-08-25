import { classNames } from 'shared/lib/classNames/classNames'
import classes from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = function ({ className = '' }: PageErrorProps) {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames({}, [classes.PageError, className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
