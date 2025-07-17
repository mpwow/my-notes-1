import styles from './TagsList.module.scss'
import {Tag} from "../Tag/Tag.jsx";

function TagsList ({tags, onTagClick}) {
    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <Tag key={tag} onClick={()=>onTagClick(tag)} tag={tag} />
            ))}
        </div>
    )
}

export default (TagsList);