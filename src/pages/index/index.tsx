/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/pages/index/index.tsx
 */

import React, { useEffect } from 'react'
import styles from './index.module.scss'

const Index: React.FC<any> = () => {
	useEffect(() => {
		console.log('index')
	}, [])
	return <div className={styles.main}>Hello Word ！</div>
}
export default Index
