"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const authenticated = false;

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      {authenticated ? (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Log out</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={toggleOpen}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {authenticated ? (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Log out</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
