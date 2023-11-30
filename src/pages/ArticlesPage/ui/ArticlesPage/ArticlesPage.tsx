import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = function (props: ArticlesPageProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation('article')

    return (
        <div className={classNames({}, [classes.ArticlesPage, className])}>
            Articles Page
        </div>
    )
}

export default memo(ArticlesPage)
