import styles from './Note.module.css';

const Note = ({ book, pages, id, onDelete }) => {
    return (
        <div className={styles.note} id={id} onClick={onDelete}>
            <p className={styles['note__book']}>{book}</p>
            <p className={styles['note__pages']}>{`${pages} pages read!`}</p>
        </div>
    );
};

export default Note;
