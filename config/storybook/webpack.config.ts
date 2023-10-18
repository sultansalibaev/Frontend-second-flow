import { type RuleSetRule } from 'webpack'
import webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    // @ts-expect-error
    config.resolve.modules = [paths.src, 'node_modules']
    config.resolve?.extensions?.push('.ts', '.tsx')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            }
        }
        return rule
    })

    config.module?.rules?.push({
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })

    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true // process.env.mode === 'development'
        })
    )

    return config
}
