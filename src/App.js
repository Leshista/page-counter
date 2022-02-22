import { useState } from 'react';
import Form from './components/Form';
import FormButton from './components/FormButton';
import Note from './components/Note';
import Nothing from './components/Nothing';

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

    const deleteHandler = (event) => {
        setItems(items.filter((item) => item.id !== Number(event.target.id)));
    };

    return (
        <main className="main">
            {formIsOpen ? (
                <Form onAddNote={SubmitHandler} />
            ) : (
                <FormButton changeFormIsOpenState={formOpenHandler} />
            )}
            {items.length !== 0 ? (
                items.map((object) => (
                    <Note
                        book={object.book}
                        pages={object.pages}
                        id={object.id}
                        key={object.key}
                        onDelete={deleteHandler}
                    />
                ))
            ) : (
                <Nothing />
            )}
        </main>
    );
}

export default App;
