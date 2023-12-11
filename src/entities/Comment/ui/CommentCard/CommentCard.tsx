import { classNames } from 'shared/lib/classNames/classNames'
import classes from './CommentCard.module.scss'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton'

interface CommentProps {
    className?: string
    isLoading?: boolean
    comment: Comment
}

export const CommentCard = memo((props: CommentProps) => {
    const {
        className = '',
        comment,
        isLoading
    } = props

    if (isLoading === true) {
        return (
            <div className={classNames({}, [classes.Comment, className])}>
                <div className={'flex items-center gap-[15px] mb-[10px]'}>
                    <Skeleton borderRadius={'50%'} width={35} height={35} className={'!mt-0 shadow-lg'} />
                    <Skeleton width={120} height={24} className={'!mt-0 shadow-md'} />
                </div>
                <Skeleton width={'100%'} height={72} className={'!mt-0 shadow-md'} />
            </div>
        )
    }

    return (
        <div className={classNames({}, [classes.Comment, className])}>
            <div className={'flex items-center gap-[15px] mb-[10px]'}>
                {Boolean(comment.user.avatar) && (<Avatar src={comment.user.avatar} size={35}/>)}
                <Text text={comment.user?.username} />
            </div>
            <Text text={comment.text} />
        </div>
    )
})
