/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/setupProxy.js
 */

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/my-server',
        createProxyMiddleware({
            target: 'http://dev.com',
            changeOrigin: true
        })
    );
};