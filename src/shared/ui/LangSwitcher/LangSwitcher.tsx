import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = function ({ className, short = false }: LangSwitcherProps) {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <Button
                className={classNames({}, [className ?? ''])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {t(
                    /* i18next-extract-disable-line */
                    short ? 'Короткий язык' : 'Язык'
                )}
            </Button>
        </div>
    )
}
