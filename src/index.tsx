import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'app/styles/index.scss'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoryProvider } from 'app/providers/StoryProvider'

render(
    <StoryProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoryProvider>,
    document.querySelector('#root')
)
