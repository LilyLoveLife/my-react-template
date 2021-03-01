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
        'react/display-name': 'off'
    }
}