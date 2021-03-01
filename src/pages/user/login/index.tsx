/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/pages/user/login/index.tsx
 */

import React from 'react';
import { Form, Input, Button, message } from 'antd';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';
import { apiLogin, apiGetUserInfo } from 'request/api';

const Login: React.FC = props => {
  const history = useHistory();

  const onFinish = async (values: any) => {
    const defaultParams = { userType: 'ADMIN' };
    const params = Object.assign({}, values, defaultParams);
    const { success, data, message: msg } = await apiLogin(params);
    if (success) {
      localStorage.setItem('TEST_TOKEN', data.token);
      localStorage.setItem('username', values.username);
      const { success: suc, data: userInfo } = await apiGetUserInfo();
      if (suc) {
        localStorage.setItem(
          'TEST_USERINFO',
          JSON.stringify(userInfo)
        );
        history.push('/');
      }
    } else {
      message.error(msg || '登录失败！');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.main}>
      <Form
        className={styles.from}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入账号'
            }
          ]}
        >
          <Input className={styles.input} placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码'
            }
          ]}
        >
          <Input.Password className={styles.input} visibilityToggle={true} placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

