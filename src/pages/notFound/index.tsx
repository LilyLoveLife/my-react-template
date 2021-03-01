/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/pages/notFound/index.tsx
 */

import React from 'react'
import notFound from 'images/404.png'

import styles from './index.module.scss'

const NotFound: React.FC = props => {
  return (
    <div className={styles.root}>
      <img src={notFound} alt="404" />
      <h1 className={styles.title}>Not Found</h1>
    </div>
  );
}
export default NotFound
