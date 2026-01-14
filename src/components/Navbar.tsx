"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Ben Havis
        </Link>
        <div className={styles.links}>
          <Link href="/scripts" className={styles.link}>
            Scripts
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="mailto:ben.havis1@gmail.com" className={styles.link}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}