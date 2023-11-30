import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options
    return {
        mode, // production
        entry: paths.entry,

        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
