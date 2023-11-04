import { Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

const themes = {
    [Theme.LIGHT]: Theme.DARK,
    [Theme.DARK]: Theme.ORANGE,
    [Theme.ORANGE]: Theme.LIGHT
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = themes[theme ?? Theme.ORANGE]
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme: theme ?? Theme.LIGHT, toggleTheme }
}
