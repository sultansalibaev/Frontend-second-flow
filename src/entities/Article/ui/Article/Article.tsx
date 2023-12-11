import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Article.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleReducer } from '../../model/slice/articleSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticle } from 'entities/Article/model/services/fetchArticle/fetchArticle'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Icon } from 'shared/ui/Icon'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleCode } from 'entities/Article/ui/ArticleCode/ArticleCode'
import { ArticleImage } from 'entities/Article/ui/ArticleImage/ArticleImage'
import { ArticleText } from 'entities/Article/ui/ArticleText/ArticleText'
import { ArticleTitle } from 'entities/Article/ui/ArticleTitle/ArticleTitle'

interface ArticleProps {
    className?: string
    id: string
}

const initialReducers: ReducersList = {
    article: articleReducer
}

export const Article = memo((props: ArticleProps) => {
    const {
        className = '',
        id
    } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleIsLoading)
    const article = useSelector(getArticleData)
    const error = useSelector(getArticleError)

    const renderBlock = useCallback((block: ArticleBlock, index) => {
        if (block.type === 'code') return <ArticleCode block={block} key={index} />
        else if (block.type === 'image') return <ArticleImage block={block} key={index} />
        else if (block.type === 'text') return <ArticleText block={block} key={index} />
        else if (block.type === 'title') return <ArticleTitle block={block} key={index} />
        else return null
    }, [])

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return
        void dispatch(fetchArticle(id))
    }, [dispatch, id])

    let content

    if (isLoading === true) {
        content = (
            <div className={classes['article-container']}>
                <Skeleton
                    className={classes.avatar}
                    width={200}
                    height={200}
                    borderRadius={'50%'}
                />
                <Skeleton
                    className={classes.title}
                    width={'60%'}
                    height={30}
                    borderRadius={5}
                />
                <Skeleton
                    className={classes.title}
                    width={'40%'}
                    height={30}
                    borderRadius={5}
                />
                <Skeleton
                    width={'100%'}
                    height={230}
                    borderRadius={5}
                />
                <Skeleton
                    width={'100%'}
                    height={230}
                    borderRadius={5}
                />
            </div>
        )
    } else if (error != null) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <div>
                <Text
                    className={classes.title}
                    title={article?.title}
                />
                <div className={classes.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text
                        text={new Date(article?.createdAt ?? '').format('d.m.Y')}
                    />
                </div>
                <div className={classes.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <span title={(article?.views ?? 0).push_space()}>
                        <Text
                            text={article?.views.short()}
                        />
                    </span>
                </div>
                {article?.blocks.map(renderBlock)}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames({}, [classes.Article, className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
