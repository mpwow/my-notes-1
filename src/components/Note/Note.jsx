import styles from './Note.module.scss'
import {Tag} from "../Tag/Tag.jsx";
import Modal from "../Modal/Modal.jsx";
import {useState} from "react";

export default function Note({ title, content, tags, onDelete}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className={styles.note} onClick={()=>{setModalIsOpen(true)}}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <button onClick={onDelete} className={styles.deleteButton} title="Удалить">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50"><path d="M21 0c-1.645 0-3 1.355-3 3v2h-7.813a1.009 1.009 0 0 0-.374 0H7.905c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h1.094l3.594 40.5c.124 1.398 1.316 2.5 2.718 2.5h19.188c1.402 0 2.593-1.102 2.718-2.5L40.907 7H42c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496H32V3c0-1.645-1.355-3-3-3Zm0 2h8c.563 0 1 .438 1 1v2H20V3c0-.563.438-1 1-1Zm-9.906 5h27.812l-3.593 40.344c-.032.347-.403.656-.72.656H15.407c-.316 0-.687-.309-.719-.656Zm7.812 2.969c-.043.008-.086.02-.125.031A1.002 1.002 0 0 0 18 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 0 0-1.094-1.031Zm6 0c-.043.008-.086.02-.125.031A1.002 1.002 0 0 0 24 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 0 0-1.094-1.031Zm6 0c-.043.008-.086.02-.125.031A1.002 1.002 0 0 0 30 11v33c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V11a1 1 0 0 0-1.094-1.031Z"/></svg>
                    </button>
                </div>
                <p className={styles.content}>{content}</p>
                <div className={styles.tags}>{tags.map((tag, index)=>{
                    return <Tag tag={tag} key={index}/>
                })}</div>
            </div>
            <Modal isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)}>
                <div className={styles.modalNote}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <p className={styles.modalContent}>{content}</p>
                    <div className={styles.modalTags}>{tags.map((tag, index)=>{
                        return <Tag tag={tag} key={index}/>
                    })}</div>
                </div>
            </Modal>
        </>

    )
}