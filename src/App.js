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
        <main className='main'>
            {formIsOpen ? (
                <Form onAddNote={SubmitHandler} />
            ) : (
                <FormButton changeFormIsOpenState={formOpenHandler} />
            )}
        </main>
    );
}

export default App;
