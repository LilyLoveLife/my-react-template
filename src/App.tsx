/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/App.ts
 */

import React, { Suspense } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import Routes from 'config/routes'

import Loading from 'components/Loading'
import BasicLayout from 'layouts/BasicLayout/index'
import UserLayout from 'layouts/UserLayout'
import NotFound from 'pages/notFound'

import styles from 'App.module.scss'

const getPages = (routes: IRoute[]) => {
	return routes.map(({ component: Component, chidren: Chidren, ...route }, index) => {
		const { ...others } = {
			...route,
			render: () => {
				if (Chidren) {
					return getPages(Chidren as [])
				}
				if (Component) {
					return <Component></Component>
				}
				return null
			}
		}
		return <Route {...others} key={index} />
	})
}

const LogIn = () => {
	return (
		<UserLayout>
			<Switch>{getPages(Routes.loginRoutes)}</Switch>
		</UserLayout>
	)
}

const Home = () => {
	console.log(111)
	const routers = (
		<BasicLayout>
			<Switch>{getPages(Routes.routes)}</Switch>
		</BasicLayout>
	)
	return routers
}
const App = () => {
	console.log('App')
	return (
		<div className={styles.root}>
			<ConfigProvider locale={zhCN}>
				<Suspense fallback={<Loading />}>
					<HashRouter>
						<Switch>
							<Route path="/login" component={LogIn} />
							<Route path="/404" component={NotFound} />
							<Route path="/" component={Home} />
						</Switch>
					</HashRouter>
				</Suspense>
			</ConfigProvider>
		</div>
	)
}

export default App
