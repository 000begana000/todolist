import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>To Do List</h1>
      <div className={styles.context}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </header>
  );
}
