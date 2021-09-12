/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/.eslintrc.js
 */

module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended' // 用prettier来进行格式化
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [],
    // plugins: ['react', '@typescript-eslint', 'plugin:prettier/recommended'],
    rules: {
        'react/display-name': 'off',
        '@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used' }] //不能有声明后未被使用的变量或参数
    }
}