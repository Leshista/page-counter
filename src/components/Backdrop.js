import styles from './Backdrop.module.css';

const Backdrop = ({ backdropMessage, onCancel }) => {
    return (
        <div className={styles.backdrop} onClick={onCancel}>
            <div className={styles['backdrop__card']}>
                <p className={styles['backdrop__message']}>Oops!</p>
                <p className={styles['backdrop__message']}>{backdropMessage}</p>
                <button
                    className={styles['backdrop__button']}
                    onClick={onCancel}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default Backdrop;
