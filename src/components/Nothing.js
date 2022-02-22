import styles from './Nothing.module.css';

const Nothing = () => {
    return (
        <div className={styles['nothing__container']}>
            <p className={styles['nothing__text']}>Nothing here yet, folks!</p>
            <p className={styles['nothing__text']}>Add Something!</p>
        </div>
    );
};

export default Nothing;
