import styles from './App.module.css';
import NotesForm from './components/NotesForm/NotesForm.jsx';
import Header from './components/Header/Header.jsx';
import NotesList from './components/NotesList/NotesList.jsx';
import Search from './components/Search/Search.jsx';
import {useEffect, useState, createContext, useContext, useCallback, useMemo} from "react";
import TagsList from "./components/TagsList/TagsList.jsx";

const initialNotes = [];
const LOCAL_STORAGE_KEY = 'notes';
const NotesContext = createContext();


function Notes() {
    const [searchQuery, setSearchQuery] = useState('');
    const {notes, setNotes} = useContext(NotesContext);

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.tags.includes(searchQuery.toLowerCase()));
    const uniqueTags = useMemo(() => {
        return [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))]
    }, [notes])

    const onTagClick = useCallback((tag) => {
        setSearchQuery(tag);
    }, [setSearchQuery])

    return (
        <>
            <Search value={searchQuery} onChange={setSearchQuery}/>
            {uniqueTags.length > 0 && <TagsList tags={uniqueTags} onTagClick={onTagClick}/>}
            {notes.length > 0 && <NotesList
                notes={searchQuery ? filteredNotes : notes}
                setNotes={setNotes}/>}
        </>

    )
}


function Main() {
    const {notes, setNotes} = useContext(NotesContext);

    const onAddNote = useCallback((note) => {
        setNotes(prev => {
            return [...prev, note];
        });
    }, [notes, setNotes])

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header count={notes.length}/>
                <NotesForm onAddNote={onAddNote}/>
                <Notes/>
            </div>
        </div>
    )
}


function App() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedNotes ? JSON.parse(savedNotes) : initialNotes;
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes])

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            <Main/>
        </NotesContext.Provider>)
}

export default App
