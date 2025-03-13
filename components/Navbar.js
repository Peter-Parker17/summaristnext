import styles from "../src/app/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  console.log(styles);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/login">
          <li>Login</li>
        </Link>
        <Link href="/about">
        <li>About</li>
        </Link>
        <Link href="/contact">
        <li>Contact</li>
        </Link>
        <Link href="/help">
        <li>Help</li>
        </Link>
        <input placeholder="Search..." type="text"></input>
      </ul>
    </nav>
  );
}
