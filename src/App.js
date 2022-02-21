import { useState } from 'react';
import Form from './components/Form';
import FormButton from './components/FormButton';

import './main.css';

function App() {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(0);

    const formOpenHandler = () => {
        setFormIsOpen(!formIsOpen);
    };
    const SubmitHandler = (event) => {
        event.preventDefault();
        setItems((prevItems) => [
            ...prevItems,
            {
                book: event.target[0].value,
                pages: event.target[1].value,
                id: itemId,
                key: itemId,
            },
        ]);
        setItemId(itemId + 1);
        setFormIsOpen(!formIsOpen);
    };

    return (
        <main className="main">
            {formIsOpen ? (
                <Form onAddNote={SubmitHandler} />
            ) : (
                <FormButton changeFormIsOpenState={formOpenHandler} />
            )}
        </main>
    );
}

export default App;
