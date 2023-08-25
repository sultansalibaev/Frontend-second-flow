import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader (isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // regex for resource path (like some css module)
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
}
