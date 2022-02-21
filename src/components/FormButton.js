import styles from './FormButton.module.css';

const FormButton = ({ changeFormIsOpenState }) => {
    return (
        <div>
            <button className={styles['form-opener']} onClick={changeFormIsOpenState}>
                Add New
            </button>
        </div>
    );
};

export default FormButton;
