import styles from "../src/app/Navbar.module.css"

export default function Navbar(){
    console.log(styles)
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>Login</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}