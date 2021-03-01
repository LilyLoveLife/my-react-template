/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/config/routes.ts
 */

import React from 'react';
import Index from 'pages/index'

const loginRoutes: IRoute[] = [
  {
    exact: true,
    path: '/login',
    component: () => import('pages/user/login')
  },
  {
    notLazy: true,
    component: Index
  }
];

const routes: IRoute[] = [
  {
    exact: true,
    path: '/',
    title: '首页',
    component: Index,
    notLazy: true
  },
  {
    exact: true,
    path: '/management',
    title: '管理',
    chidren: [
      {
        path: '/management/list',
        title: '列表',
        component: () => import('pages/management/list'),
      },
      {
        path: '/management/detail',
        title: '详情',
        component: () => import('pages/management/detail'),
        hideInMenu: true
      }
    ]
  }
];

function addLazyComponent(routes: IRoute[]) {
  routes.forEach(route => {
    if (route.component && !route.notLazy) {
      route.component = React.lazy(route.component);
    }
    if (route.chidren) {
      addLazyComponent(route.chidren);
    }
  });
}
addLazyComponent(loginRoutes);
addLazyComponent(routes);

const allRoutes = {
  loginRoutes: loginRoutes,
  routes: routes
};
export default allRoutes
