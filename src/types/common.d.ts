/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/types/common.d.ts
 */

interface IRoute {
    path?: string;
    exact?: boolean;
    component?: Promise | (() => any);
    icon?: Promise | (() => any);
    title?: string;
    chidren?: IRoute[];
    hideInMenu?: boolean;
    auth?: string;
    notLazy?: boolean;
  }
  
  interface MapType {
    [propName: string]: any;
  }
  interface IObject {
    id: string | number;
    name: string;
  }
  interface PageType {
    pageNo: number;
    pageSize: number;
    total?: number;
  }