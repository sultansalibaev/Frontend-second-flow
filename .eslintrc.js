module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: ['./tsconfig.json']
    },
    plugins: ['react', 'i18next', 'eslint-plugin-react-hooks'],
    rules: {
        'n/handle-callback-err': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.ts', '.tsx', '.jsx']
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to']
        }],

        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'react/display-name': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }, {
        files: ['**/src/**/*.stories.{ts,tsx}'],
        rules: {
            '@typescript-eslint/consistent-type-assertions': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off'
        }
    }]
}
