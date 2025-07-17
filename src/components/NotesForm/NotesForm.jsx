import styles from "./NotesForm.module.scss"
import {useState} from "react";

function NotesForm({onAddNote}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError('Необходимо указать заголовок');
            return;
        }
        onAddNote({id: Math.random().toString(), title, content, tags: tags.length ? tags.split(',') : []});
        setTitle('');
        setContent('');
        setTags('');
    }

    return (
        <form className={styles.notesForm} onSubmit={onSubmit}>
            <input type="text" placeholder="Заголовок заметки" value={title} onChange={(e) => {
                setTitle(e.target.value)
                setError('')
            }} className={styles.inputField}/>
            {Boolean(error) && <span className={styles.error}>{error}</span>}
            <textarea placeholder="Содержание заметки" value={content} onChange={(e) => setContent(e.target.value)}
                      className={styles.inputField}/>
            <input type="text" placeholder="Теги (через запятую)" value={tags} onChange={(e) => setTags(e.target.value)}
                   className={styles.inputField}/>
            <button type="submit" className={styles.button}>
                Добавить заметку
            </button>
        </form>
    )
}

export default (NotesForm);