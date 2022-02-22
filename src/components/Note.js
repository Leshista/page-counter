import styles from './Note.module.css';

const Note = ({ book, pages }) => {
    return (
        <div className={styles.note}>
            <p className={styles['note__book']}>{book}</p>
            <p className={styles['note__pages']}>{`${pages} pages read!`}</p>
        </div>
    );
};

export default Note;
