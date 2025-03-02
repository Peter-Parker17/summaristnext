import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "../app/Navbar.module.css"

export default function Home() {
  return (
    <>
    <Navbar />
    <ul className={styles.ul}>
      <h1>This is the Home Page</h1>
    </ul>
    </>
  );
}
