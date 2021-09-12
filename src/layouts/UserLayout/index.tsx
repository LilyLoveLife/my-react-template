/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/layouts/UserLayout/index.tsx
 */

import React from 'react'
import styles from './index.module.scss'
import logo from 'images/icon_user.jpg'

const UserLayout: React.FC = ({ children }: any) => {
	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<img src={logo} alt="" className={styles.logoImg} />
			</div>
			<div className={styles.title}>
				<div className={styles.titleHeader}>管理系统</div>
			</div>
			<div className={styles.children}>{children}</div>
		</div>
	)
}
export default UserLayout
