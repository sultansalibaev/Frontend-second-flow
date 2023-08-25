import { classNames } from 'shared/lib/classNames/classNames'
import classes from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = function ({ className = '' }: PageLoaderProps) {
    return (
        <div className={classNames({}, [classes.PageLoader, className])}>
            <Loader/>
        </div>
    )
}
