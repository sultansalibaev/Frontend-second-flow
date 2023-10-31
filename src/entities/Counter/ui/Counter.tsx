import { Button } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export const Counter = function () {
    const dispatch = useAppDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-button"
                onClick={increment}>{t('increment')}</Button>
            <Button
                data-testid="decrement-button"
                onClick={decrement}>{t('decrement')}</Button>
        </div>
    )
}
