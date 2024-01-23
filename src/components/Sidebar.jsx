// import React from 'react'
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
