import styles from './Tag.module.scss';

export function Tag ({tag, onClick}) {
    return (
        <button className={styles.tag} onClick={onClick}>
            {tag}
        </button>
    )
}