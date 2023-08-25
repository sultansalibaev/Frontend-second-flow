import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const sassLoader = buildCssLoader(isDev)

    const svgLoader = {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env']
                ],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en']
                            // keyAsDefaultValue: true
                        }
                    ]
                    // […] your other plugins […]
                ]
            }
        }
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        sassLoader
    ]
}
