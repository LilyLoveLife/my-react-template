/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/config/index.ts
 */

import devConfig from './config.dev';
import testConfig from './config.test';
import prodConfig from './config.prod';
const ENV = {
  DEV: 'DEV',
  TEST: 'TEST',
  PROD: 'PROD'
};
const envMapConfig = {
  [ENV.DEV]: devConfig,
  [ENV.TEST]: testConfig,
  [ENV.PROD]: prodConfig
};
const REACT_APP_ENV = process.env.REACT_APP_ENV || ENV.DEV;
const getConfig = () => {
  return envMapConfig[REACT_APP_ENV];
};

export default getConfig()

