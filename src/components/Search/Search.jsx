import styles from './Search.module.scss';

export default function Search({value, onChange}) {

    return (
        <input className={styles.search} type="text" placeholder="Поиск заметок..." value={value}
               onChange={(e) => onChange(e.target.value)}/>
    )
}