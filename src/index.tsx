/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/index.tsx
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.scss'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
