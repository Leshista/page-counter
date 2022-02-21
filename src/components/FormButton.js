const FormButton = ({ changeFormIsOpenState }) => {
    return (
        <div>
            <button className="form-button" onClick={changeFormIsOpenState}>
                Add New
            </button>
        </div>
    );
};

export default FormButton;
