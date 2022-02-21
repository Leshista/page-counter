import { useState } from 'react';
import Form from './components/Form';
import FormButton from './components/FormButton';

import './main.css';

function App() {
    const [formIsOpen, setFormIsOpen] = useState(false);

    const formOpenHandler = () => {
        setFormIsOpen(!formIsOpen);
    };
    const SubmitHandler = (event) => {
        event.preventDefault();
        setFormIsOpen(!formIsOpen);
    };

    return (
        <div>
            {formIsOpen ? (
                <Form onAddNote={SubmitHandler} />
            ) : (
                <FormButton changeFormIsOpenState={formOpenHandler} />
            )}
        </div>
    );
}

export default App;
