import styles from "./NotesList.module.scss";
import Note from "../Note/Note.jsx";

export default function NotesList({notes, setNotes}) {

    return (
        <div className={styles.notesList}>
            {notes.map((note) => (
                <Note key={note.id} title={note.title} content={note.content} tags={note.tags} onDelete={()=>{
                    setNotes(notes.filter(currentNote => currentNote.id !== note.id));
                }}/>
            ))}
        </div>
    )
}