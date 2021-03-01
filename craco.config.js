/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/craco.config.js
 */

module.exports = {
    babel: {
        plugins: [
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true //设置为true即是less
                }
            ]
        ]
    },
};