import styles from "./Header.module.scss";

function Header({count}) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.ya}>М</span>
                <span className={styles.text}>ои Заметки</span>
            </h1>
            <div className={styles.notesCount}>
                Всего заметок: <span id="notesCount">{count}</span>
            </div>
        </header>
    )
};

export default (Header);