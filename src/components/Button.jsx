/* eslint-disable react/prop-types */
// import React from 'react'
import styles from './Button.module.css';

export default function Button({children, onClick, type}) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`} >
        {children}
    </div>
  )
}
