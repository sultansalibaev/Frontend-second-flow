import { type BuildOptions } from '../types/config'

export function bulidBabelLoader (options: BuildOptions) {
    return {
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
}
