import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <img src="/utslogo.png" alt="UTS logo" className={styles.logo} />
            <h1>Project Gallery (Demo)</h1>
        </div>
    );
}

export default Header;
