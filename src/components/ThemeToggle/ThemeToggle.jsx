"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        isDark
          ? {
              background: "white",
            }
          : {
              background: "#0f172a",
            }
      }
    >
      <Image src="/moon.png" width={14} height={14} alt="moon" />
      <div
        className={styles.toggle}
        style={
          isDark
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} alt="sun" />
    </div>
  );
};

export default ThemeToggle;
