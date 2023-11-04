import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { bulidBabelLoader } from './loaders/bulidBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

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

    const babelLoader = bulidBabelLoader(options)

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        sassLoader
    ]
}
