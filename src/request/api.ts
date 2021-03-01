/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/request/api.ts
 */
import Axios from 'request/axios'


export const apiLogin = (query: object) => Axios.post('/user/login', query)

export const apiGetUserInfo = () => Axios.post('/user/info')
