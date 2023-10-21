import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={20} height={20} alt="facebook" />
        <Image src="/instagram.png" width={20} height={20} alt="instagram" />
        <Image src="/tiktok.png" width={20} height={20} alt="tiktok" />
        <Image src="/youtube.png" width={20} height={20} alt="youtube" />
      </div>
      <div className={styles.logo}>Milan Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
