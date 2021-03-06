import styles from './Form.module.css';

const Form = ({ onAddNote }) => {
    return (
        <div className={styles['form-card']}>
            <form className={styles.form} onSubmit={onAddNote}>
                <label htmlFor="name">Book</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="pages">Pages</label>
                <input type="number" name="pages" id="pages" />
                <button type="submit" className={styles['form__submit']}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
