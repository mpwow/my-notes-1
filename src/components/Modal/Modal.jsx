import styles from './Modal.module.scss';
import {createPortal} from "react-dom";
export default function Modal({ isOpen, onClose, children }) {

    if (!isOpen) {
        return null
    }

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e)=>e.stopPropagation() }>
                {children}
            </div>
        </div>,
        document.body
    )
}