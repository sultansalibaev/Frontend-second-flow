import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
// import { useTranslation } from 'react-i18next'
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly === true
                    ? <RequireAuth>{element}</RequireAuth>
                    : element
                }
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
