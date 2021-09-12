/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/layouts/BasicLayout/header/index.tsx
 */

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Popover, Form, Modal, Button, Input } from 'antd'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import UserImg from 'images/icon_user.jpg'

import './index.module.scss'

interface IHeaderProps {
	openSider: boolean
	toggleSider(): any
}

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 16 }
}

const Header = (props: IHeaderProps) => {
	const history = useHistory()
	const [resetPwdVisible, setResetPwdVisible] = useState(false)
	const [form] = Form.useForm()
	const getPopupContainer = () => document.getElementById('header') as HTMLElement
	const quit = () => {
		localStorage.removeItem('TEST_TOKEN')
		history.push('/login')
	}
	const clickResetSelfPwd = () => {
		form.resetFields()
		setResetPwdVisible(true)
	}
	const handleOk = async () => {
		try {
			form.resetFields()
		} catch (error) {}
	}
	const closeModal = () => {
		form.resetFields()
		setResetPwdVisible(false)
	}
	const content = (
		<div>
			<div className="popover-content" onClick={quit}>
				退出
			</div>
			<div className="popover-content" onClick={clickResetSelfPwd}>
				修改密码
			</div>
		</div>
	)
	return (
		<>
			<Layout.Header className="header">
				{props.openSider ? (
					<MenuUnfoldOutlined className="trigger" onClick={props.toggleSider} />
				) : (
					<MenuFoldOutlined className="trigger" onClick={props.toggleSider} />
				)}

				<div id="header">
					<Popover content={content} getPopupContainer={getPopupContainer}>
						<div className="user-content">
							<img className="user-img" alt="头像" src={UserImg} />
							<p className="user-name">{(JSON.parse(localStorage.getItem('TEST_USERINFO') || '') || {}).name}</p>
						</div>
					</Popover>
				</div>
			</Layout.Header>
			<Modal
				destroyOnClose={false}
				getContainer={false}
				forceRender
				title={'修改密码'}
				maskClosable={false}
				visible={resetPwdVisible}
				bodyStyle={{ padding: 20 }}
				width={500}
				onCancel={closeModal}
				footer={
					<div className="footer">
						<Button onClick={closeModal}>取消</Button>
						<Button type="primary" onClick={handleOk}>
							确定
						</Button>
					</div>
				}
			>
				<div className="content">
					<Form {...layout} form={form}>
						<div className="form-item">
							<Form.Item label="新密码" name="pwd" rules={[{ required: true, message: '请输入新密码！' }]}>
								<Input autoComplete="new-password" />
							</Form.Item>
						</div>
						<div className="form-item">
							<Form.Item
								label="确认密码"
								name="confirmedPwd"
								validateTrigger={['onBlur']}
								rules={[
									{ required: true, message: '请输入确认密码！' },
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('pwd') === value) {
												return Promise.resolve()
											}
											return Promise.reject('两次密码输入不一致！')
										}
									})
								]}
							>
								<Input autoComplete="new-password" />
							</Form.Item>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	)
}
export default Header
