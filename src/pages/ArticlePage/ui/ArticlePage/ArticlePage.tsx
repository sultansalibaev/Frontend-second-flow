import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticlePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticlePage = function (props: ArticleDetailsPageProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    if (id == null) {
        return (
            <div className={classNames({}, [classes.ArticleDetailsPage, className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames({}, [classes.ArticleDetailsPage, className])}>
            <Article id={id}></Article>
        </div>
    )
}

export default memo(ArticlePage)
