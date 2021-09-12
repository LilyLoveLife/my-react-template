/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/layouts/BasicLayout.tsx
 */

import React, { useState, useCallback } from 'react'
import { Redirect } from 'react-router-dom'

import { Layout } from 'antd'

import Header from '../header'
import SiderMenu from '../siderMenu'

import styles from './index.module.scss'

const { Content } = Layout

const BasicLayout = (props: any) => {
	const [SiderProps, setSiderProps] = useState({
		collapsed: false
	})
	const toggle = useCallback(() => setSiderProps({ collapsed: !SiderProps.collapsed }), [SiderProps.collapsed])

	const token = localStorage.getItem('TEST_TOKEN')
	return token ? (
		<Layout className={styles.root}>
			<SiderMenu SiderProps={SiderProps} />
			<Layout>
				<Header openSider={SiderProps.collapsed} toggleSider={toggle} />
				<Content className={styles.mainContent}>{props.children}</Content>
			</Layout>
		</Layout>
	) : (
		<Redirect to="/login" />
	)
}
export default BasicLayout
