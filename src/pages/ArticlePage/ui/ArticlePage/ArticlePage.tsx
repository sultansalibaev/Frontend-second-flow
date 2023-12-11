import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticlePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'

interface ArticlePageProps {
    className?: string
}

const ArticlePage = function (props: ArticlePageProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    if (id == null) {
        return (
            <div className={classNames({}, [classes.ArticlePage, className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames({}, [classes.ArticlePage, 'max-w-[750px] mx-auto', className])}>
            <Article id={id}></Article>
            <Text title={t('Комментарии')} className={'mt-[20px]'} />
            <CommentList isLoading={true} comments={[
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus ducimus enim ex id labore maxime nesciunt, omnis porro quas quia quod ratione rem rerum tempora ullam velit?',
                    user: {
                        email: 'in7678523@gmail.com',
                        username: 'Sultan',
                        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
                    }
                },
                {
                    id: 2,
                    text: 'Aliquid autem error in, laborum nisi odio sit velit vitae! Aliquid eveniet id illo illum nisi quam quasi, reiciendis tenetur? Beatae dolorum esse et eveniet explicabo fuga itaque iure maiores molestiae nobis, non nulla numquam perspiciatis, possimus quam reiciendis vero voluptates!',
                    user: {
                        email: 'in7678523@gmail.com',
                        username: 'Hacker',
                        avatar: 'https://www.soscanhelp.com/hs-fs/hubfs/Dark%20Web%20Hacker%20Blue%20Glow.jpeg?width=3008&name=Dark%20Web%20Hacker%20Blue%20Glow.jpeg'
                    }
                },
                {
                    id: 3,
                    text: 'Aspernatur assumenda aut commodi esse fugit maiores minima porro praesentium, sit vitae? Ab facilis officia quod tempora veniam.',
                    user: {
                        email: 'in7678523@gmail.com',
                        username: 'Venom',
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCeoiFRRe104G9VRAR7esff5uL0XtcL7O6QtXZ2Z_bO6uwv0MTu08_Shbh9PZKdMV8MY&usqp=CAU'
                    }
                }
            ]}/>
        </div>
    )
}

export default memo(ArticlePage)
