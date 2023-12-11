import { classNames } from 'shared/lib/classNames/classNames'
import classes from './CommentList.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className = '',
        comments,
        isLoading
    } = props
    const { t } = useTranslation('article')

    return (
        <div className={classNames({}, [classes.CommentList, className])}>
            {comments?.length !== undefined
                ? comments?.map(comment => (
                    <CommentCard comment={comment} key={comment.id} isLoading={isLoading} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    )
})
