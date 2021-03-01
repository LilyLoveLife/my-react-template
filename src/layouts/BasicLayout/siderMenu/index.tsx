/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/layouts/BasicLayout/SiderMenu/index.tsx
 */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { SiderProps } from 'antd/es/layout/Sider'
import routes from 'config/routes'

const { Sider } = Layout

interface ISiderMenuProps {
  SiderProps?: SiderProps;
}

const renderMenu = (routes: IRoute[]) => {
  return routes.map((route, index) => {
    const { path, chidren, title } = route;
    return Array.isArray(chidren) ? (
      <Menu.SubMenu key={path} title={title}>
        {renderMenu(chidren)}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={path} title={title}>
        {title}
      </Menu.Item>
    );
  });
};

const getOpenKeys = (key: string, routes: IRoute[]): string[] => {
  const openKeys: string[] = [];
  const helper = (routes: IRoute[]) => {
    for (const route of routes) {
      if (route.path === key) {
        openKeys.push(route.path);
        return true;
      }
      if (helper(route.chidren || [])) {
        openKeys.push(route.path as string);
        return true;
      }
    }
    return false;
  };
  helper(routes);
  return openKeys;
};

const SiderMenu: React.FC<ISiderMenuProps> = ({ SiderProps, ...props }) => {
  const isUpdate = useRef(false);
  const history = useHistory();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  let MenuList = JSON.parse(JSON.stringify(routes.routes));
  const userInfo = JSON.parse(
    localStorage.getItem('TEST_USERINFO') || '{}'
  );
  if (userInfo?.roleCode === 'teacher') {
    MenuList = MenuList.filter((menu: any) => menu.auth !== 'OnlyAdmin');
  }
  MenuList = MenuList.filter((item: any) => {
    if (item.chidren) {
      item.chidren = item.chidren.filter((child: any) => {
        const flag =
          (userInfo?.roleCode === 'teacher' && child?.auth === 'OnlyAdmin') ||
          child.hideInMenu;
        return !flag
      });
    }

    return !item.hideInMenu;
  });
  const clickMenuItem = useCallback(({ key }) => {
    if (key.match(/^(http|https):*/)) {
      window.open(key, '_blank');
    } else {
      history.push(key)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys);
  };

  useEffect(() => {
    if (isUpdate.current) {
      return
    }
    isUpdate.current = true

    const openKeysSet: Set<string> = new Set([
      ...openKeys,
      ...getOpenKeys(location.pathname, MenuList)
    ]);
    const newOpenKeys: string[] = []
    openKeysSet.forEach(key => newOpenKeys.push(key))
    setOpenKeys(newOpenKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickMenuItem])

  return (
    <Sider trigger={null} collapsible {...SiderProps}>
      <div className="logo">
        <h1>管理系统</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[location.pathname]}
        onClick={clickMenuItem}
        onOpenChange={onOpenChange}
      >
        {renderMenu(MenuList)}
      </Menu>
    </Sider>
  );
};
SiderMenu.defaultProps = {
  SiderProps: {}
}
export default SiderMenu